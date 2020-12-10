const db = require('../database').getInstance();

module.exports = {

    getCars: () => {
        const CarModel = db.getModel('Car');
        return CarModel.findAll();
    },
    getCarById: (id) => {
        const CarModel = db.getModel('Car');

        return CarModel.findByPk(id);
    },
    createCar: (car) => {
        const CarModel = db.getModel('Car');
        return CarModel.create(car);
    },
    deleteCar: (carId) => {
        const CarModel = db.getModel('Car');
        return CarModel.destroy({
            where: {
                id: carId
            }
        });
    },
    deleteAllCars: () => {
        const CarModel = db.getModel('Car');
        CarModel.destroy({
            where: {},
            truncate: true
        });
    },

    updateCar: (carId, car) => {
        const CarModel = db.getModel('Car');
        return CarModel.update(
            { ...car },
            { returning: true, where: { id: carId } }
        );
    }

};

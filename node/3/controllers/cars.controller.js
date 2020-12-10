const { carsService } = require('../services');

module.exports = {
    getCars: async (req, res) => {
        try {
            const cars = await carsService.getCars();
            if (!cars) throw new Error('troubles with getting car');
            res.status(200).json(cars);
        } catch (e) {
            res.status(400).json(e.message);
        }
    },

    getCarById: async (req, res) => {
        try {
            const { id } = req.params;

            const car = await carsService.getCarById(id);
            if (!car) throw new Error('troubles with getting car');
            res.status(200).json(car);
        } catch (e) {
            res.status(400).json(e.message);
        }
    },
    createCar: async (req, res) => {
        try {
            // eslint-disable-next-line no-unused-vars
            const { _, ...carData } = req.body;
            const createdCar = await carsService.createCar(carData);

            if (!createdCar) throw new Error('troubles with creating car');

            res.status(200).json(createdCar);
        } catch (e) {
            res.status(400).json(e.message);
        }
    },

    deleteCar: async (req, res) => {
        try {
            const { id } = req.params;
            const deletedCar = await carsService.deleteCar(id);

            if (!deletedCar) throw new Error('troubles with deleting car');

            res.status(200).json('Car successfully deleted');
        } catch (e) {
            res.status(400).json(e.message);
        }
    },

    updateCar: async (req, res) => {
        try {
            const { id } = req.params;
            const { ...CarData } = req.body;
            const updatedCar = await carsService.updateCar(id, CarData);

            if (!updatedCar) throw new Error('troubles with updating car');

            res.status(200).json(updatedCar);
        } catch (e) {
            res.status(400).json(e.message);
        }
    }
};

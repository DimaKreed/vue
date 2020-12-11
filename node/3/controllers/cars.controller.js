const { carsService } = require('../services');
const {
    success: {
        OK, UPDATED, DELETED, CREATED
    }
} = require('../database/success');

module.exports = {
    getCars: async (req, res) => {
        const cars = await carsService.getCars();
        res.status(OK.code)
            .json(cars);
    },

    getCarById: async (req, res) => {
        const { id } = req.params;
        const car = await carsService.getCarById(id);
        res.status(OK.code)
            .json(car);
    },

    createCar: async (req, res) => {
        // eslint-disable-next-line no-unused-vars
        const { _, ...carData } = req.body;
        await carsService.createCar(carData);

        res.status(CREATED.code)
            .json(CREATED.message);
    },

    deleteCar: async (req, res) => {
        const { id } = req.params;
        await carsService.deleteCar(id);

        res.status(DELETED.code)
            .json(DELETED.message);
    },

    updateCar: async (req, res) => {
        const { id } = req.params;
        const { ...CarData } = req.body;
        await carsService.updateCar(id, CarData);

        res.status(UPDATED.code)
            .json(UPDATED.message);
    }
};

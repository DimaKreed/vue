const { carsService } = require('../services');
const {
    success: {
        OK, UPDATED, DELETED, CREATED
    }
} = require('../database/success');
const { ErrorHandler, errors: { AlREADY_EXISTS } } = require('../database/errors');

module.exports = {
    getCars: (req, res, next) => {
        try {
            res.status(OK.code).json(req.cars);
        } catch (e) { next(e); }
    },

    getCar: (req, res, next) => {
        try {
            res.status(OK.code).json(req.car);
        } catch (e) { next(e); }
    },

    getCarById: async (req, res, next) => {
        try {
            const { id } = req.params;
            const car = await carsService.getCarById(id);
            res.status(OK.code)
                .json(car);
        } catch (e) { next(e); }
    },

    createCar: async (req, res, next) => {
        try {
            if (req.car_is_present) throw new ErrorHandler(AlREADY_EXISTS.code, AlREADY_EXISTS.message);

            await carsService.createCar(req.car);

            res.status(CREATED.code)
                .json(CREATED.message);
        } catch (e) { next(e); }
    },

    deleteCar: async (req, res, next) => {
        try {
            const { id } = req.params;
            await carsService.deleteCar(id);

            res.status(DELETED.code)
                .json(DELETED.message);
        } catch (e) { next(e); }
    },

    updateCar: async (req, res, next) => {
        try {
            const { id } = req.params;
            const { ...CarData } = req.body;
            await carsService.updateCar(id, CarData);

            res.status(UPDATED.code)
                .json(UPDATED.message);
        } catch (e) { next(e); }
    }
};

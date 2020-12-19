const { Router } = require('express');

const carsRoutes = Router();

const { carsController } = require('../controllers');
const { carMiddleware } = require('../middlewares');

carsRoutes.get('/',
    carMiddleware.checkIsCarsGot,
    carsController.getCars);
carsRoutes.post('/', carMiddleware.checkCarValidity,
    carMiddleware.checkIsCarPresentInDataBase,
    carsController.createCar);
carsRoutes.get('/params',
    carMiddleware.checkIsCarGot,
    carsController.getCar);

carsRoutes.get('/:id', carsController.getCarById);
carsRoutes.put('/:id', carsController.updateCar);
carsRoutes.delete('/:id', carsController.deleteCar);

module.exports = carsRoutes;

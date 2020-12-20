const { Router } = require('express');

const carsRoutes = Router();

const { carsController } = require('../controllers');
const { carMiddleware } = require('../middlewares');

carsRoutes.get('/',
    carMiddleware.checkIsCarsGot,
    carsController.getCars);
carsRoutes.post('/',
    carMiddleware.checkCarValidity,
    carMiddleware.checkIsCarPresentInDataBase,
    carsController.createCar);
carsRoutes.get('/params',
    carMiddleware.checkIsCarGot,
    carsController.getCar);

carsRoutes.use('/:car_id', carMiddleware.checkCarIdValidity);

carsRoutes.get('/:car_id',
    carMiddleware.checkIsCarGot,
    carsController.getCar);
carsRoutes.put('/:car_id',
    carMiddleware.checkCarValidity,
    carMiddleware.checkIsCarPresentInDataBase,
    carsController.updateCar);
carsRoutes.delete('/:car_id',
    carMiddleware.checkIsCarPresentInDataBase,
    carsController.deleteCar);

module.exports = carsRoutes;

const { Router } = require('express');

const usersRoutes = Router();

const { carsController } = require('../controllers');

usersRoutes.get('/', carsController.getCars);
usersRoutes.post('/', carsController.createCar);

usersRoutes.get('/:id', carsController.getCarById);
usersRoutes.put('/:id', carsController.updateCar);
usersRoutes.delete('/:id', carsController.deleteCar);

module.exports = usersRoutes;

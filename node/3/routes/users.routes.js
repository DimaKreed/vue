const { Router } = require('express');

const usersRoutes = Router();

const { usersController } = require('../controllers');

usersRoutes.get('/', usersController.getUsers);
usersRoutes.get('/:id', usersController.getUsersById);
usersRoutes.post('/', usersController.createUser);
usersRoutes.put('/:id', usersController.updateUser);
usersRoutes.delete('/:id', usersController.deleteUser);

module.exports = usersRoutes;

const { Router } = require('express');

const usersRoutes = Router();

const { usersController } = require('../controllers');
const { userMiddleware } = require('../middlewares');

usersRoutes.get('/', userMiddleware.checkIsUsersGot, usersController.getUsers);
usersRoutes.post('/', userMiddleware.checkUserValidity, usersController.createUser);
usersRoutes.get('/:id', userMiddleware.checkUserIdValidity, userMiddleware.checkIsUserGot, usersController.getUserById);
usersRoutes.get('/:param', userMiddleware.checkIsUsersGot, usersController.getUserByParams);
usersRoutes.put('/:id', userMiddleware.checkUserIdValidity, userMiddleware.checkUserValidity, usersController.updateUser);
usersRoutes.delete('/:id', userMiddleware.checkUserIdValidity, usersController.deleteUser);

module.exports = usersRoutes;

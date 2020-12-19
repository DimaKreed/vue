const { Router } = require('express');

const usersRoutes = Router();

const { usersController } = require('../controllers');
const { userMiddleware } = require('../middlewares');

usersRoutes.get('/',
    userMiddleware.checkIsUsersGot,
    userMiddleware.normalizeUser,
    usersController.getUsers);
usersRoutes.post('/',
    userMiddleware.checkUserValidity,
    userMiddleware.checkIsUserPresentInDataBase,
    usersController.createUser);
usersRoutes.get('/params',
    userMiddleware.checkIsUserGot,
    userMiddleware.normalizeUser,
    usersController.getUser);

usersRoutes.use('/:user_id', userMiddleware.checkUserIdValidity);

usersRoutes.get('/:user_id',
    userMiddleware.checkIsUserGot,
    userMiddleware.normalizeUser,
    usersController.getUser);
usersRoutes.put('/:user_id',
    userMiddleware.checkUserValidity,
    userMiddleware.checkIsUserPresentInDataBase,
    userMiddleware.checkIsPasswordOk,
    usersController.updateUser);
usersRoutes.delete('/:user_id',
    userMiddleware.checkIsUserPresentInDataBase,
    usersController.deleteUser);

module.exports = usersRoutes;

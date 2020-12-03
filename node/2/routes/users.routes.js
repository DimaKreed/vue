const { Router } = require('express');

const usersRoutes = Router();

const { usersController } = require('../controllers');
const { checkUserValidity } = require('../middlewares/user.middleware');

usersRoutes.get('/', checkUserValidity, usersController.getUsers);

module.exports = usersRoutes;

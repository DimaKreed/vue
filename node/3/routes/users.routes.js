const { Router } = require('express');

const usersRoutes = Router();

const { usersController } = require('../controllers');

usersRoutes.get('/', usersController.getUsers);

module.exports = usersRoutes;

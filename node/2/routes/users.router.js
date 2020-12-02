const { Router } = require('express');

const usersRoutes = Router();

const { getUsers } = require('../services/user.service');
const { checkUserValidity } = require('../middlewares/user.middleware');

usersRoutes.get('/', checkUserValidity, getUsers);

module.exports = usersRoutes;

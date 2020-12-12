const { Router } = require('express');

const authRoutes = Router();

const { authController } = require('../controllers');

authRoutes.post('/', authController.getUser);

module.exports = authRoutes;

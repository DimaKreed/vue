const { Router } = require('express');

const authRoutes = Router();

const authController = require('../controllers/auth.controller');
const { checkUserValidity } = require('../middlewares/user.middleware');

authRoutes.get('/login', authController.renderLoginPage);

authRoutes.post('/login', checkUserValidity, authController.login);

authRoutes.get('/logout', authController.logout);

authRoutes.get('/registration', authController.renderRegistrationPage);

authRoutes.post('/registration', checkUserValidity, authController.registration);

module.exports = authRoutes;

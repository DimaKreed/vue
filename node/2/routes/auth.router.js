const { Router } = require('express');

const authRouter = Router();

const authController = require('../controllers/auth.controller');
const { checkUserValidity } = require('../middlewares/user.middleware');

authRouter.get('/login', authController.renderLoginPage);

authRouter.post('/login', checkUserValidity, authController.login);

authRouter.get('/logout', authController.logout);

authRouter.get('/registration', authController.renderRegistrationPage);

authRouter.post('/registration', checkUserValidity, authController.registration);

module.exports = authRouter;

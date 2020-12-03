const { Router } = require('express');

const userRoutes = Router();

const { userController } = require('../controllers');
const { checkUserIdValidity, checkUserValidity } = require('../middlewares/user.middleware');

userRoutes.get('/:userId', checkUserIdValidity, userController.getUserById);
userRoutes.delete('/:userId', checkUserIdValidity, userController.deleteUser);
userRoutes.put('/:userId', checkUserValidity, checkUserIdValidity, userController.updateUser);

module.exports = userRoutes;

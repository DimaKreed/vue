const { Router } = require('express');

const userRouter = Router();

const { userController } = require('../controllers');
const { checkUserIdValidity, checkUserValidity } = require('../middlewares/user.middleware');

userRouter.get('/:userId', checkUserIdValidity, userController.getUserById);
userRouter.delete('/:userId', checkUserIdValidity, userController.deleteUser);
userRouter.put('/:userId', checkUserValidity, checkUserIdValidity, userController.updateUser);

module.exports = userRouter;

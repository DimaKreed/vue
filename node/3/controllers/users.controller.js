const { usersService } = require('../services');
const {
    success: {
        OK, CREATED, DELETED, UPDATED
    }
} = require('../database/success');
const { ErrorHandler, errors: { AlREADY_EXISTS, NOT_FOUND } } = require('../database/errors');

const { password: passwordHasher } = require('../helpers');

module.exports = {
    getUsers: (req, res) => {
        try {
            res.status(OK.code)
                .json(req.users);
        } catch (e) {
        }
    },

    getUser: (req, res) => {
        try {
            res.status(OK.code).json(req.user);
        } catch (e) {
        }
    },

    createUser: async (req, res) => {
        try {
            if (req.user_is_present) throw new ErrorHandler(AlREADY_EXISTS.code, AlREADY_EXISTS.message);

            req.user.password = await passwordHasher.hash(req.user.password);
            usersService.createUser(req.user);
            res.status(CREATED.code)
                .json(CREATED.message);
        } catch (e) {

        }
    },

    deleteUser: async (req, res) => {
        console.log('deleteUser');
        console.log(req.user_is_present);
        try {
            console.log();
            if (!req.user_is_present) throw new ErrorHandler(NOT_FOUND.code, NOT_FOUND.message);
            console.log('deleteUser');
            await usersService.deleteUser(req.userInDB.id);
            res.status(DELETED.code).json(DELETED.message);
        } catch (e) {
        }
    },

    updateUser: async (req, res) => {
        try {
            if (!req.user_is_present) throw new ErrorHandler(NOT_FOUND.code, NOT_FOUND.message);
            req.user.password = await passwordHasher.hash(req.user.password);

            await usersService.updateUser(req.userInDB.id, req.user);
            console.log('updated');

            res.status(UPDATED.code).json(UPDATED.message);
        } catch (e) {
        }
    }

};

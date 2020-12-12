const { ErrorHandler, errors: { NOT_VALID_ID, NOT_FOUND } } = require('../database/errors');
const { BAD_REQUEST } = require('../configs/error-codes');
const { usersService } = require('../services');
const { usersValidator } = require('../validators');

module.exports = {
    checkUserValidity: (req, res, next) => {
        try {
            const { error } = usersValidator.validate(req.body);
            if (error) throw new ErrorHandler(BAD_REQUEST, error.details[0].message);

            next();
        } catch (e) {
            next(e);
        }
    },

    checkUserIdValidity: (req, res, next) => {
        try {
            const { id } = req.params;
            if (!id || id < 0) throw new ErrorHandler(NOT_VALID_ID.code, NOT_VALID_ID.message);
            req.id = id;
            next();
        } catch (e) {
            next(e);
        }
    },
    checkIsUsersGot: async (req, res, next) => {
        try {
            const users = await usersService.getUsers();
            if (!users) throw new ErrorHandler(NOT_FOUND.code, NOT_FOUND.message);
            req.users = users;
            next();
        } catch (e) {
            next(e);
        }
    },
    checkIsUserGot: async (req, res, next) => {
        try {
            const userById = await usersService.getUserById(req.id);
            const userByParams = await usersService.getUserByParams(req.param);

            if (!userById) throw new ErrorHandler(NOT_FOUND.code, NOT_FOUND.message);
            req.userById = userById;
            req.userByParams = userByParams;
            next();
        } catch (e) {
            next(e);
        }
    },

};

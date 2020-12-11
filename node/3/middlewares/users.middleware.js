const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const { ErrorHandler, errors: { NOT_VALID_BODY, NOT_VALID_ID, NOT_FOUND } } = require('../database/errors');
const { usersService } = require('../services');

module.exports = {
    checkUserValidity: (req, res, next) => {
        const {
            name, email, age, password
        } = req.body;
        try {
            if (!name || !password || !email || !age) throw new ErrorHandler(NOT_VALID_BODY.code, NOT_VALID_BODY.message);
            if (name.length < 4) throw new ErrorHandler(NOT_VALID_BODY.code, NOT_VALID_BODY.message);
            if (!re.test(email)) throw new ErrorHandler(NOT_VALID_BODY.code, NOT_VALID_BODY.message);
            if (age < 1) throw new ErrorHandler(NOT_VALID_BODY.code, NOT_VALID_BODY.message);
            req.user = {
                name, email, age, password
            };
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
            const user = await usersService.getUserById(req.id);
            if (!user) throw new ErrorHandler(NOT_FOUND.code, NOT_FOUND.message);
            req.user = user;
            next();
        } catch (e) {
            next(e);
        }
    },

};

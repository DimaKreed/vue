const jwt = require('jsonwebtoken');
const { authValidator } = require('../validators');
const { usersService, authService } = require('../services');
const {
    errorCodes: { BAD_REQUEST }, ErrorHandler, errors: {
        NOT_VALID_BODY, NOT_FOUND, NOT_VALID_TOKEN, PERMISSION_DENIED
    }
} = require('../database/errors');

module.exports = {
    checkAuthData: (req, res, next) => {
        try {
            if (req.body.email || req.body.name) {
                const { error } = authValidator.validate(req.body);
                if (error) throw new ErrorHandler(BAD_REQUEST, error.details[0].message);

                req.user = req.body;
            } else {
                throw new ErrorHandler(NOT_VALID_BODY.code, NOT_VALID_BODY.message);
            }
            next();
        } catch (e) {
            next(e);
        }
    },

    checkIsUserPresentInDataBase: async (req, res, next) => {
        try {
            const { email, name } = req.user;

            const user = await usersService.getUserByParams({ email } || { name });

            if (user) {
                req.userInDB = user;
            } else throw new ErrorHandler(NOT_FOUND.code, NOT_FOUND.message);

            next();
        } catch (e) {
            next(e);
        }
    },

    checkAccessToken: async (req, res, next) => {
        try {
            const access_token = req.get('Authorization');

            if (!access_token) {
                throw new ErrorHandler(NOT_VALID_TOKEN.code, NOT_VALID_TOKEN.message);
            }
            jwt.verify(access_token, 'access_key', (err) => {
                if (err) {
                    throw new ErrorHandler(NOT_VALID_TOKEN.code, NOT_VALID_TOKEN.message);
                }
            });

            const userWithToken = await authService.getUserWithTokensByParams({ access_token });

            if (!userWithToken) {
                throw new ErrorHandler(NOT_VALID_TOKEN.code, NOT_VALID_TOKEN.message);
            }

            req.user = userWithToken;

            next();
        } catch (e) {
            next(e);
        }
    },

    checkRefreshToken: async (req, res, next) => {
        try {
            const refresh_token = req.get('Authorization');

            if (!refresh_token) {
                throw new ErrorHandler(NOT_VALID_TOKEN.code, NOT_VALID_TOKEN.message);
            }
            jwt.verify(refresh_token, 'refresh_key', (err) => {
                if (err) {
                    throw new ErrorHandler(NOT_VALID_TOKEN.code, NOT_VALID_TOKEN.message);
                }
            });
            const userWithToken = await authService.getUserWithTokensByParams({ refresh_token });

            if (!userWithToken) {
                throw new ErrorHandler(NOT_VALID_TOKEN.code, NOT_VALID_TOKEN.message);
            }
            req.user = userWithToken;

            next();
        } catch (e) {
            next(e);
        }
    },

    checkPermission: (req, res, next) => {
        try {
            if (req.user.id !== +req.params.user_id) {
                throw new ErrorHandler(PERMISSION_DENIED.code, PERMISSION_DENIED.message);
            }
        } catch (e) {
            next(e);
        }
    }

};

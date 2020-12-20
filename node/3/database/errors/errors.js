const { BAD_REQUEST, NOT_FOUND, CONFLICT } = require('../../configs/error-codes');

module.exports = {
    NOT_VALID_BODY: {
        message: 'Request is not valid',
        code: BAD_REQUEST
    },
    NOT_VALID_ID: {
        message: 'ID is not valid',
        code: BAD_REQUEST
    },
    NOT_FOUND: {
        message: 'DATA is not fount',
        code: NOT_FOUND
    },
    WRONG_EMAIL_OR_PASSWORD: {
        message: 'Wrong email or password',
        code: BAD_REQUEST
    },
    AlREADY_EXISTS: {
        message: 'data is already exists',
        code: CONFLICT
    }
};

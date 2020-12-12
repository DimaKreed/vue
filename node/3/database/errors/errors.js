const { BAD_REQUEST, NOT_FOUND } = require('../../configs/error-codes');

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
    }
};

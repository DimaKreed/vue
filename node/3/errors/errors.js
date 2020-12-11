const { BAD_REQUEST } = require('./error-codes');

module.exports = {
    NOT_VALID_BODY: {
        message: 'Request is not valid',
        code: BAD_REQUEST
    },
    NOT_VALID_ID: {
        message: 'ID is not valid',
        code: BAD_REQUEST
    }
};

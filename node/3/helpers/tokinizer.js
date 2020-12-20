const jwt = require('jsonwebtoken');

const { ACCESS_TOKEN_SECRET_KEY, REFRESH_TOKEN_SECRET_KEY } = require('../configs/config');

module.exports = () => {
    const access_token = jwt.sign({}, ACCESS_TOKEN_SECRET_KEY, { expiresIn: '10m' });
    const refresh_token = jwt.sign({}, REFRESH_TOKEN_SECRET_KEY, { expiresIn: '30d' });

    return {
        access_token,
        refresh_token
    };
};

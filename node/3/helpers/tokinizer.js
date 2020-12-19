const jwt = require('jsonwebtoken');

module.exports = () => {
    const access_token = jwt.sign({}, 'access_key', { expiresIn: '10m' });
    const refresh_token = jwt.sign({}, 'refresh_key', { expiresIn: '30d' });

    return {
        access_token,
        refresh_token
    };
};

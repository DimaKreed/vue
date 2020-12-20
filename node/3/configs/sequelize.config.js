const {
    DB_USERNAME, DB_PASSWORD, DB, DIALECT, HOST
} = require('./config');

module.exports = {
    development: {
        username: DB_USERNAME,
        password: DB_PASSWORD,
        database: DB,
        host: HOST,
        dialect: DIALECT
    },

};

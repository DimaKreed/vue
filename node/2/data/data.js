const path = require('path');

const isLogged = false;
const idOfLoggedUser = -1;
const pathToDB = path.join(process.cwd(), 'database/users.json');

module.exports = {
    isLogged,
    idOfLoggedUser,
    pathToDB
};

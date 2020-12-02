const fs = require('fs');

const getUsers = (pathToDB = '') => new Promise((resolve, reject) => {
    fs.readFile(pathToDB, (err, data) => {
        if (err) reject(err);
        resolve(JSON.parse(data.toString()));
    });
});

const writeUsersToDB = (pathToDB = '', usersList) => {
    fs.writeFile(pathToDB, JSON.stringify(usersList), (err) => err);
};

module.exports.getUsers = getUsers;
module.exports.writeUserstoDB = writeUsersToDB;

const fs = require('fs');

module.exports = {
    getUsers: (pathToDatabase) => new Promise((resolve, reject) => {
        fs.readFile(pathToDatabase, (err, data) => {
            if (err) reject(err);
            resolve(JSON.parse(data.toString()));
        });
    }),

    writeUsersToDB: (pathToDatabase, usersList) => {
        fs.writeFile(pathToDatabase, JSON.stringify(usersList), (err) => err);
    }
};

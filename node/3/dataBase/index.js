const { Sequelize, DataTypes } = require('sequelize');
const fs = require('fs');
const path = require('path');
// const mysql2 = require('mysql2');
//
// const connection = mysql2.createConnection({
//     user: 'root',
//     password: 'root',
//     dataBase: '',
//     host: 'localhost'
// });
//
// module.exports = connection.promise();

module.exports = (() => {
    let instance;

    const initConnection = () => {
        const client = new Sequelize('node', 'root', 'Lvbnhjrjv24012001', {
            host: 'localhost',
            dialect: 'mysql'
        });

        const models = {};
        const pathToModels = path.join(process.cwd(), 'database', 'models');

        const getModels = () => {
            fs.readdir(pathToModels, (err, files) => {
                files.forEach((file) => {
                    const [model] = file.split('.');
                    models[model] = (require(path.join(pathToModels, model)))(client, DataTypes);
                });
            });
        };

        return {
            setModels: () => getModels(),
            getModel: (modelName) => models[modelName]
        };
    };

    return {
        getInstance: () => {
            if (!instance) {
                instance = initConnection();
            }

            return instance;
        }
    };
})();

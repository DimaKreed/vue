const { usersService, carsService } = require('../../services');

module.exports = {
    // eslint-disable-next-line no-unused-vars
    up: (queryInterface, Sequelize) => {
        usersService.createUser({
            name: 'Dima', email: 'dima@gmail.com', age: 20, password: 'dimdim'
        });
        usersService.createUser({
            name: 'Lina', email: 'lina@gmail.com', age: 22, password: 'Lino4ka'
        });

        carsService.createCar({
            model: 'BMW', user_id: 1
        });
        carsService.createCar({
            model: 'Mercedes', user_id: 2
        });
        carsService.createCar({
            model: 'Lamborghini', user_id: 1
        });
    },

    // eslint-disable-next-line no-unused-vars
    down: (queryInterface, Sequelize) => {
        usersService.deleteAllUsers();
        carsService.deleteAllCars();
    }
};

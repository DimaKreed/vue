const db = require('../database').getInstance();

module.exports = {

    getUsers: () => {
        const UserModel = db.getModel('User');
        const CarModel = db.getModel('Car');

        UserModel.findAll()
            .then((users) => users.forEach((user) => {
                CarModel.findAll({
                    where: {
                        id: user.id
                    },
                    include: [{ model: UserModel, as: 'user' }]
                });
            }));
    },

};

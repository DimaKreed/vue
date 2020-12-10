const db = require('../database').getInstance();

module.exports = {

    getUsers: () => {
        const UserModel = db.getModel('User');
        return UserModel.findAll();
    },
    getUserById: (id) => {
        const UserModel = db.getModel('User');
        const CarModel = db.getModel('Car');

        return CarModel.findAll({
            attributes: { exclude: ['user_id'] },
            where: { user_id: id },
            include: [{ model: UserModel, as: 'user' }]
        });
    },
    createUser: (user) => {
        const UserModel = db.getModel('User');
        return UserModel.create(user);
    },
    deleteUser: (userId) => {
        const UserModel = db.getModel('User');
        return UserModel.destroy({
            where: {
                id: userId
            }
        });
    },
    deleteAllUsers: () => {
        const UserModel = db.getModel('User');
        UserModel.destroy({
            where: {},
            truncate: true
        });
    },
    updateUser: (userId, user) => {
        const UserModel = db.getModel('User');
        return UserModel.update(
            { ...user },
            { returning: true, where: { id: userId } }
        );
    }

};

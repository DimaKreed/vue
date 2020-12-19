const db = require('../database').getInstance();

module.exports = {

    getUsers: () => {
        const CarModel = db.getModel('Car');
        const UserModel = db.getModel('User');
        return UserModel.findAll({
            include: CarModel
        });
    },
    getUserById: (id) => {
        const CarModel = db.getModel('Car');
        const UserModel = db.getModel('User');
        return UserModel.findByPk(id, {
            include: CarModel,
            exclude: 'password',
        });
    },
    getUserByParams: (param) => {
        const CarModel = db.getModel('Car');
        const UserModel = db.getModel('User');
        return UserModel.findOne({
            where: param,
            include: CarModel
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
        console.log(userId);
        console.log(user);

        const UserModel = db.getModel('User');
        return UserModel.update(
            { ...user },
            { returning: true, where: { id: userId } }
        );
    },

    normalizeUser: (user) => {
        if (Array.isArray(user)) delete user[0].dataValues.password;
        else delete user.dataValues.password;
    }

};

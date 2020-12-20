const db = require('../database').getInstance();

module.exports = {
    createTokenPair: (tokenPair) => {
        const AuthModel = db.getModel('O_Auth');
        return AuthModel.create(tokenPair);
    },

    updateTokenPair: (user_id, tokenPair) => {
        console.log(user_id);
        console.log(tokenPair);
        const AuthModel = db.getModel('O_Auth');
        return AuthModel.update(
            tokenPair,
            { returning: true, where: user_id }
        );
    },

    getUserWithTokensByParams: (params) => {
        const AuthModel = db.getModel('O_Auth');
        const UserModel = db.getModel('User');

        return UserModel.findOne({
            include: {
                model: AuthModel,
                where: params
            }
        });
    },
    getTokensByUserId: (user_id) => {
        const AuthModel = db.getModel('O_Auth');

        return AuthModel.findOne({
            where: user_id
        });
    }
};

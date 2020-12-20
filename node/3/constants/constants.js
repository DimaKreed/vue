module.exports = {
    AUTHORIZATION: 'Authorization',
    NOW: 'NOW',
    tableNames: {
        CARS: 'cars',
        USERS: 'users',
        O_AUTH: 'o_auth',
    },
    models: {
        CAR: 'Car',
        USER: 'User',
        O_AUTH: 'O_Auth'
    },
    foreignKey: {
        USER_ID: 'user_id',
        ID: 'id'
    },
    changeTypes: {
        CASCADE: 'cascade'
    }
};

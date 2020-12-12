const { usersService } = require('../services');
const {
    success: {
        OK, CREATED, DELETED, UPDATED
    }
} = require('../database/success');

module.exports = {
    getUsers: (req, res) => {
        res.status(OK.code).json(req.users);
    },

    getUserById: (req, res) => {
        res.status(OK.code).json(req.user);
    },
    getUserByParams: (req, res) => {
        res.status(OK.code).json(req.user);
    },
    createUser: async (req, res) => {
        await usersService.createUser(req.user);
        res.status(CREATED.code)
            .json(CREATED.message);
    },

    deleteUser: async (req, res) => {
        await usersService.deleteUser(req.id);
        res.status(DELETED.code).json(DELETED.message);
    },

    updateUser: async (req, res) => {
        await usersService.updateUser(req.id, req.user);

        res.status(UPDATED.code).json(UPDATED.message);
    }

};

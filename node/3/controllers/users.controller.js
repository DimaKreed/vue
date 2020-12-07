const { usersService } = require('../services');

module.exports = {
    getUsers: async (req, res) => {
        try {
            const users = await usersService.getUsers();
            if (!users) throw new Error('troubles with getting users');
            res.status(200).json(users);
        } catch (e) {
            res.status(400).json(e.message);
        }
    },

    getUsersById: async (req, res) => {
        try {
            const { id } = req.params;

            const user = await usersService.getUserById(id);
            if (!user) throw new Error('troubles with getting user');
            res.status(200).json(user);
        } catch (e) {
            res.status(400).json(e.message);
        }
    },
    createUser: async (req, res) => {
        try {
            const { _, ...userData } = req.body;
            const createdUser = await usersService.createUser(userData);

            if (!createdUser) throw new Error('troubles with creating user');

            res.status(200).json(createdUser);
        } catch (e) {
            res.status(400).json(e.message);
        }
    },

    deleteUser: async (req, res) => {
        try {
            const { id } = req.params;
            const deletedUser = await usersService.deleteUser(id);

            if (!deletedUser) throw new Error('troubles with deleting user');

            res.status(200).json('Users successfully deleted');
        } catch (e) {
            res.status(400).json(e.message);
        }
    },

    updateUser: async (req, res) => {
        try {
            const { id } = req.params;
            const { id: idToUpdate, ...userData } = req.body;
            const updatedUser = (idToUpdate)
                ? await usersService.updateUser(id, { idToUpdate, ...userData })
                : await usersService.updateUser(id, userData);

            if (!updatedUser) throw new Error('troubles with updating user');

            res.status(200).json(updatedUser);
        } catch (e) {
            res.status(400).json(e.message);
        }
    }

};

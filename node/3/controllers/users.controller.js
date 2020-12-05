const { userService } = require('../services');

module.exports = {
    getUsers: async (req, res) => {
        try {
            const users = await userService.getUsers();
            if (!users) throw new Error('troubles with getting users');
            res.status(200).json(users);
        } catch (e) {
            res.status(400).json(e.message);
        }
    }
};

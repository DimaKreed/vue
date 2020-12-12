const { password: passwordComparator } = require('../helpers');
const { usersService: { getUserByEmail } } = require('../services');

module.exports = {
    getUser: async (req, res) => {
        const user = await getUserByEmail(req.body.email);
        const { password, ...normalizedUser } = user.dataValues;
        await passwordComparator.compare(req.body.password, password);
        res.json(normalizedUser);
    }

};

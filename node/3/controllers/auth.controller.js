const { password: passwordComparator } = require('../helpers');
const { usersService: { getUserByParams } } = require('../services');

module.exports = {
    getUser: async (req, res) => {
        const user = await getUserByParams(req.body.email);
        const { password, ...normalizedUser } = user.dataValues;
        await passwordComparator.compare(req.body.password, password);
        res.json(normalizedUser);
    }

};

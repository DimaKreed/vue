const { password } = require('../helpers');
const { usersService: { getUserByEmail } } = require('../services');

module.exports = {
    getUser: async (req, res) => {
        const user = await getUserByEmail(req.body.email);
        console.log(user);
         await password.compare(req.password, user.password);
        res.json(user);
    }

};

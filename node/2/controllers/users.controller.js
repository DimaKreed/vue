const { isLogged } = require('../data/data');
const { getUsers } = require('../services/user.service');
const { pathToDB } = require('../data/data');

module.exports = {
    getUsers: (req, res) => {
        console.log(isLogged);
        getUsers(pathToDB)
            .then((users) => res.render('users', { isLogged, users }))
            .catch((reason) => { res.send(reason); return reason; });
    }
};

const { pathToDB, idOfLoggedUser } = require('../data/data');
let { isLogged } = require('../data/data');
const { getUsers, writeUsersToDB } = require('./actionsDB');

module.exports = {
    getUserById: (req, res) => {
        const { userId } = req.params;

        getUsers(pathToDB)
            .then((users) => {
                res.status(200).json(users[userId]);
            })
            .catch((reason) => { res.send(reason); return reason; });
    },

    deleteUser: (req, res) => {
        const { userId } = req.params;
        if (userId !== idOfLoggedUser) {
            throw new Error('you can\'t delete user with this id');
        }
        getUsers(pathToDB)
            .then((users) => {
                const usersList = users;
                usersList.splice(userId, 1);
                writeUsersToDB(pathToDB, usersList);
                isLogged = !isLogged;
                res.redirect('/');
            })
            .catch((reason) => { res.send(reason); return reason; });
    },

    updateUser: (req, res) => {
        const { userId } = req.params;
        const { nickname, password, email } = req.body;

        if (userId !== idOfLoggedUser) {
            throw new Error('you can\'t update user with this id');
        }

        getUsers(pathToDB)
            .then((users) => {
                const usersList = users;
                usersList[userId] = { nickname, password, email };
                writeUsersToDB(pathToDB, usersList);
                res.send('User successfully updated');
            })
            .catch((reason) => { res.send(reason); return reason; });
    }
};

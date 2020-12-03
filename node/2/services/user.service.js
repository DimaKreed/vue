const { pathToDB} = require('../data/data');
let { isLogged, idOfLoggedUser } = require('../data/data');
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
    },
    createUser: (req, res) => {
        const { nickname, password, email } = req.body;

        getUsers(pathToDB)
            .then((users) => {
                const usersList = users;
                users.forEach((user, id) => {
                    if (user.nickname === nickname || user.email === email) {
                        res.render('error', { errorMsg: 'уже є користувачі з даними емейлом або нікнеймом' });
                    }
                    usersList.push({
                        nickname, password, email, id: usersList.length
                    });
                    writeUsersToDB(pathToDB, JSON.stringify(usersList));
                    isLogged = !isLogged;
                    // eslint-disable-next-line no-unused-vars
                    idOfLoggedUser = id;
                    res.redirect('/users');
                });
            })
            .catch((reason) => { res.send(reason); return reason; });
    },
};

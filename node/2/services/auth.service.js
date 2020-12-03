let { isLogged, idOfLoggedUser } = require('../data/data');
const { pathToDB } = require('../data/data');
const { getUsers, writeUsersToDB } = require('./actionsDB');

module.exports = {
    renderLoginPage: (req, res) => { if (!isLogged) res.render('login'); res.status(400).json('error'); },
    login: (req, res) => {
        const { nickname, password } = req.body;
        getUsers(pathToDB)
            .then((users) => {
                users.forEach((user, id) => {
                    if (user.nickname === nickname && user.password === password) {
                        isLogged = !isLogged;
                        idOfLoggedUser = id;
                        res.status(200).json(users);
                        // res.redirect('/users');
                    }
                });
            })
            .catch((reason) => { res.send(reason); return reason; });
    },
    logout: (req, res) => {
        isLogged = !isLogged;
        res.redirect('/');
    },
    renderRegistrationPage: (req, res) => { if (!isLogged) res.render('registration'); },

};

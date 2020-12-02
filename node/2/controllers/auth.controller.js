let { isLogged, idOfLoggedUser } = require('../data/data');
const { pathToDB } = require('../data/data');
const { getUsers, writeUserstoDB } = require('../services/user.service');

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
    registration: (req, res) => {
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
                    writeUserstoDB(pathToDB, JSON.stringify(usersList));
                    isLogged = !isLogged;
                    // eslint-disable-next-line no-unused-vars
                    idOfLoggedUser = id;
                    res.redirect('/users');
                });
            })
            .catch((reason) => { res.send(reason); return reason; });
    },

};

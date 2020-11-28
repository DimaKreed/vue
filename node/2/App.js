const express = require('express');
const expressHBS = require('express-handlebars');
const path = require('path');
const fs = require('fs');

const app = express();

const pathToUsersList = path.join(process.cwd(), 'users.json');
let isLogged = false;
const getUsers = () => new Promise((resolve, reject) => {
    fs.readFile(pathToUsersList, (err, data) => {
        if (err) reject(err);
        else resolve(JSON.parse(data.toString()));
    });
});

app.use(express.static(path.join(process.cwd(), 'data')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.set('view engine', '.hbs');
app.engine('.hbs', expressHBS({
    defaultLayout: false
}));
app.set('views', path.join(process.cwd(), 'views'));

app.listen(5000, () => {
});

app.get('/', (req, res) => {
    getUsers()
        .then((users) => res.render('main', { isLogged, users }))
        .catch((error) => error);
});
app.get('/login', (req, res) => {
    if (!isLogged) res.render('login');
    // if is logged user cant go to this page
});
app.get('/registration', (req, res) => {
    if (!isLogged) res.render('registration');
    // if is logged user cant go to this page
});
app.post('/', (req, res) => {
    const { nickname, password } = req.body;
    getUsers()
        .then((users) => {
            users.forEach((user) => {
                if (user.nickname === nickname && user.password === password) {
                    isLogged = !isLogged;
                    res.redirect('/');
                }
            });
        })
        .catch((reason) => console.log(reason));
    res.render('error', { errorMsg: 'Неправильний логін або пароль' });
});
app.get('/logout', (req, res) => {
    isLogged = !isLogged;
    res.redirect('/');
});
app.post('/registration', (req, res) => {
    const { nickname, password, email } = req.body;
    getUsers()
        .then((users) => {
            const usersList = users;
            users.forEach((user) => {
                if (user.nickname === nickname || user.email === email) {
                    res.render('error', { errorMsg: 'уже є користувачі з даними емейлом або нікнеймом' });
                } else {
                    usersList.push({ nickname, password, email });
                    fs.writeFile(pathToUsersList, JSON.stringify(usersList), (err) => err);
                    isLogged = !isLogged;
                    res.redirect('/');
                }
            });
        })
        .catch((reason) => console.log(reason));
});
app.get('/error', (req, res) => {
  res.render('error');
});

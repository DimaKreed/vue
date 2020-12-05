const { Router } = require('express');
const { renderErrorPage } = require('../controllers/error.controller');

const errorRoutes = Router();

errorRoutes.get('/', renderErrorPage);

module.exports = errorRoutes;

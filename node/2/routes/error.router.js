const { Router } = require('express');
const { renderErrorPage } = require('../controllers/error.controller');

const errorRouter = Router();

errorRouter.get('/', renderErrorPage);

module.exports = errorRouter;

const { Router } = require('express');
const loginController = require('../controllers/loginController');

const route = Router();

route.post('/login', loginController.login);

module.exports = route;
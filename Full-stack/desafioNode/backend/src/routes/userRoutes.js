const { Router } = require('express');
const userController = require('../controllers/userController');

const route = Router();

route.post('/signup', userController.create);
route.get('/users', userController.readAll);
route.get('/users/:id', userController.readOne);
route.put('/users/:id', userController.update);
route.delete('/users/:id', userController.delete);

module.exports = route;
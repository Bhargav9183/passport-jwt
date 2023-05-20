const express = require('express');
const routes = express.Router();
const registerController = require('../controller/registerController');
const passport = require('passport');

routes.post('/register', registerController.register);
routes.post('/login', registerController.Login);
routes.get('/checkjwt', passport.authenticate('admin',{ session: false }), registerController.checkjwt);

module.exports = routes
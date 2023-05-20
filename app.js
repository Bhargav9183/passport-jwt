const express = require('express');
const app = express();
const port = 5050;
const db = require('./config/mongoose')
const cookie = require('cookie-parser');
const session = require('express-session');
const passport = require('passport');
const passportJwt = require('./config/jwt-passport');
app.use(express.urlencoded());
app.use(express.json());
app.use(cookie());


app.use('/', require('./routes'));
app.listen(port, (err) => {
    if (err) {
        console.log('server in error');
    }

    console.log('server is runing :- ' + port);
})
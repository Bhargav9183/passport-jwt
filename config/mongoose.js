const mongoose = require('mongoose');
const db = mongoose.connect('mongodb://127.0.0.1:27017/myapp');
db ? console.log('db is connected') : console.log('db connecting in error')

module.exports = db;
'use strict'

var mongoose = require('mongoose');

mongoose.set('useFindAndModify', false);
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/api_rest_stock', { useNewUrlParser: true})
    .then(() => {
        console.log('se conecto bien la base de datos');
    });
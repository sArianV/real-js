'use strict'

require('pretty-error').start();

var mongoose = require('mongoose');
var app = require('./app');
var port = 3900;
mongoose.set('useFindAndModify', false);
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/api_rest_stock', { useNewUrlParser: true})
    .then(() => {
        console.log('se conecto bien la base de datos');
        
        //crear server y escuchar peticiones 
        app.listen(port, () => {
            console.log('servidor en http://localhost:'+port);
        });
    });
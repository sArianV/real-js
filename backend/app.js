'use strict'

//modulos de node para crear el server 
var express = require('express');
var bodyParser = require('body-parser')

// express para http 
var app = express();

//ficheros y rutas

var article_routes = require('./routes/article');
const users_routes = require('./routes/users');

//midlewares
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

//cors (peticiones del frontend)
// Configurar cabeceras y cors
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

//prefijos a rutas

app.use('/api', article_routes);
app.use('/api/users', users_routes);

//exportar modulo
module.exports = app;
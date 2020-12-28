'use strict'

//modulos de node para crear el server 
var express = require('express');
var bodyParser = require('body-parser')

// express para http 
var app = express();

//ficheros y rutas

var article_routes = require('./routes/article');

//midlewares
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

//cors (peticiones del frontend)


//prefijos a rutas

app.use('/api', article_routes);

//exportar modulo
module.exports = app;
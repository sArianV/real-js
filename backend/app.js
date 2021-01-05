'use strict'

//modulos de node para crear el server 
const express = require('express');
const bodyParser = require('body-parser')
var exjwt = require('express-jwt');

const env = require('dotenv');
env.config();

// express para http 
const app = express();

//ficheros y rutas

const article_routes = require('./routes/article');
const users_routes = require('./routes/users');

//midlewares
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

// INstantiating the express-jwt middleware
const jwtMW = exjwt({
    secret: process.env.API_KEY,
    algorithms: ['HS256']
});  


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
app.use('/api/users', jwtMW, users_routes);

//exportar modulo
module.exports = app;
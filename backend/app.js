'use strict'

//modulos de node para crear el server 
var express = require('express');
var bodyParser = require('body-parser')

// express para http 
var app = express();

//ficheros y rutas


//midlewares
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

//cors (peticiones del frontend)


//prefijos a rutas


//ruta de prueba
app.get('/test', (req , res) => {
    
    return(res.status(200).send({
        name: 'nico' ,
        status: 'gato'
    }));
});

//exportar modulo
module.exports = app;
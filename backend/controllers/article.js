'use strict'
var validator = require('validator');
var Article = require('../models/article');
const { param } = require('../routes/article');
var controller = {
    test: (req, res) => {
    
        return(res.status(200).send({
            name: 'nico' ,
            status: 'gato'
        }));
    },
    save: (req, res) => {
       var params = req.body;
       var default_avg = "0";

       //valido lo recibido en el body
       try{
        var validate_name = !validator.isEmpty(params.name);
        var validate_description = !validator.isEmpty(params.description);
        var validate_avg = validator.isNumeric(default_avg);
       }catch(err){
            return res.status(200).send({
                status: 'error',
                message:'Faltan datos por enviar!'
            })
       }
        if( validate_name && validate_description && validate_avg){

            //creo y guardo el articulo en la base de datos
            var article = new Article();
            article.name = params.name;
            article.description = params.description;
            article.image = `../src/products/${params.name}`;
            article.avg = default_avg;
            article.save((err, articleStored)=> {
            if(err || !articleStored){
                return res.status(404).send({
                    status:'error',
                    message:'El articulo no se a guardado'
                });
            }
            return res.status(200).send({
                status: 'success',
                article:articleStored 
            }); 
            });

        }else{
            return res.status(200).send({
                status: 'error',
                message:'Los datos no son correctos'
            })
        }
    },
    getAll: (req, res) => {
        //find 
        Article.find({}).exec((err, articles) => {
            
            if(err){
                return res.status(500).send({
                    status: 'error',
                    message: 'Error al devolver los articulos'
                });
            }
            if(!articles){
                return res.status(404).send({
                    status: 'error',
                    message: 'No hay articulos'
                });
            }
            
            return res.status(200).send({
                status: 'Success',
                articles
            });
           
        });
    },
    findOne: (req, res) =>{
        
        //capturo el parametro id y compruebo que exista
        var article_id = req.params.id;
        if (!article_id || article_id == null){
            if(!articles){
                return res.status(404).send({
                    status: 'error',
                    message: 'parametro incorrecto'
                });
            }
        }

        //Busco el articulo en DB
        Article.findById(article_id, (err, articles) => {
            
            if(err){
                return res.status(500).send({
                    status: 'error',
                    message: 'Error al devolver los articulos'
                });
            }
            if(!articles){
                return res.status(404).send({
                    status: 'error',
                    message: 'No se encuentra el Articulo'
                });
            }            
            return res.status(200).send({
                status: 'Success',
                articles
            });
           
        });
    }
}

module.exports = controller;
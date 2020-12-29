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
    find: (req, res) =>{
        
        //capturo el parametro id y compruebo que exista
        var article_id = req.params.id;
        if (!article_id || article_id == null){ 
            return res.status(404).send({
                status: 'error',
                message: 'parametro incorrecto'
            });
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
    },
    delete: (req, res) =>{
        var article_id = req.params.id;
        Article.findByIdAndDelete({_id: article_id}, (err, articleRemoved)=> {
            if(err){
                return res.status(500).send({
                    status: 'error',
                    message: 'Error al borrar'
            });
            }
            if(!articleRemoved){
                return res.status(404).send({
                    status: 'error',
                    message: 'No se ha podido borrar el articulo, no existe'
            });
            }
            return res.status(200).send({
                status:'success',
                article: articleRemoved
             })
        })  
    },  
    update: (req, res) =>{
        var article_id = req.params.id;
        var params = req.body;
        try{
            var validate_name = !validator.isEmpty(params.name);
            var validate_description = !validator.isEmpty(params.description);
        }catch{
            return res.status(200).send({
                status: 'error',
                message: 'Faltan datos por enviar'
            });
        }
        if (validate_description && validate_name){
            Article.findByIdAndUpdate({_id: article_id}, params, {new:true}, (err, articleUpdate) => {
                if(err){
                    return res.status(500).send({
                        status: 'error',
                        message: 'Error al modificar'
                    });
                }
                if(!articleUpdate){
                    return res.status(404).send({
                        status: 'error',
                        message: 'No existe el articulo'
                    });
                }    
                return res.status(200).send({
                    status:'success',
                    article: articleUpdate
                });                    
            });      
        }else{
            return res.status(200).send({
                status: 'error',
                message: 'La validacion no es correcta'
            });
        }
    }   
       
}
//vale gato 
module.exports = controller;
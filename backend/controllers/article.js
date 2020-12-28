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
       try{
        var validate_name = !validator.isEmpty(params.name);
        var validate_description = !validator.isEmpty(params.description);

       }catch(err){
            return res.status(200).send({
                status: 'error',
                message:'Faltan datos por enviar!'
            })
       }
       if( validate_name && validate_description){
       var article = new Article();
       article.name = params.name;
       article.description = params.description;
       article.image = `../src/products/${params.id}`;
       
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

      
       
        /* var newArticle = {
            id: params.id,
            name: params.name,
            description: params.description, 
            avg: 999999,
            image: "../src/products/"+ params.id 
        }
        return(res.status(200).send(newArticle));*/
       }else{
        return res.status(200).send({
            status: 'error',
            message:'Los datos no son correctos'
        })
       }
        
      
    }
}

module.exports = controller;
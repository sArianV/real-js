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
        var validate_id = !validator.isEmpty(params.id);
        var validate_name = !validator.isEmpty(params.name);
        var validate_description = !validator.isEmpty(params.description);

       }catch(error){
            return res.status(200).send({
                message:'Faltan datos por enviar!'
            })
       }
       if(validate_id && validate_name && validate_description){
        var newArticle = {
            id: params.id,
            name: params.name,
            description: params.description, 
            avg: 999999,
            image: "../src/products/"+ params.id 
        }
        return(res.status(200).send(newArticle));
       }else{
        return res.status(200).send({
            message:'Los datos no son correctos'
        })
       }
        
      
    }
}

module.exports = controller;
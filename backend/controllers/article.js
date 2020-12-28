'use strict'
var controller = {
    test: (req, res) => {
    
        return(res.status(200).send({
            name: 'nico' ,
            status: 'gato'
        }));
    },
    save: (req, res) => {
       var params = req.body;
        var newArticle = {
            id: params.id,
            name: params.name,
            description: params.description, 
            avg: 999999,
            image: "../src/products/"+ params.id 
        }
        return(res.status(200).send(newArticle));
    }
}

module.exports = controller;
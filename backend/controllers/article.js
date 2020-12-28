'use strict'
var controller = {
    test: (req, res) => {
    
        return(res.status(200).send({
            name: 'nico' ,
            status: 'gato'
        }));
    }
}

module.exports = controller;
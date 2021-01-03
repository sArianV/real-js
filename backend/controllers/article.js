'use strict'
var validator = require('validator');
var Article = require('../models/article');
var Price = require('../models/price');
const {
    param
} = require('../routes/article');
const PAGESIZE = 20;
var controller = {
    delete: (req, res) => {
        //falta verificar id
        var article_id = req.params.id;
        Article.findByIdAndDelete({
            _id: article_id
        }, (err, articleRemoved) => {
            if (err) {
                return res.status(500).send({
                    status: 'error',
                    message: 'Error al borrar'
                });
            }
            if (!articleRemoved) {
                return res.status(404).send({
                    status: 'error',
                    message: 'No se ha podido borrar el articulo, no existe'
                });
            }
            return res.status(200).send({
                status: 'success',
                article: articleRemoved
            })
        })
    },
    find: (req, res) => {

        //capturo el parametro id y compruebo que exista
        var article_id = req.params.id;
        if (!article_id || article_id == null) {
            return res.status(404).send({
                status: 'error',
                message: 'parametro incorrecto'
            });
        }

        //Busco el articulo en DB
        Article.findById(article_id, (err, articles) => {

            if (err) {
                return res.status(500).send({
                    status: 'error',
                    message: 'Error al devolver los articulos'
                });
            }
            if (!articles) {
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
    get: (req, res) => {

        var query = Article.find();
        var pageNumber = req.params.n;

        if (pageNumber) {
            try {
                var validate_number = validator.isNumeric(pageNumber);
            } catch (err) {
                return res.status(200).send({
                    status: 'error',
                    message: 'Faltan datos por enviar!'
                })
            }
            if (!validate_number) {
                return res.status(200).send({
                    status: 'error',
                    message: 'Los datos no son correctos'
                })
            }
            pageNumber = Number(pageNumber)
            query = query.skip((pageNumber - 1) * PAGESIZE)
                .limit(PAGESIZE);

        }
        query.exec((err, articles) => {

            if (err) {
                return res.status(500).send({
                    status: 'error',
                    message: 'Error al devolver los articulos'
                });
            }
            if (!articles) {
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
    save: (req, res) => {
        var params = req.body;
        var default_avg = "0";

        //valido lo recibido en el body
        try {
            var validate_barcode = !validator.isEmpty(params.barcode);
            var validate_name = !validator.isEmpty(params.name);
            var validate_description = !validator.isEmpty(params.description);
            var validate_avg = validator.isNumeric(default_avg);
            var validate_list_price = validator.isNumeric(params.list_price);
            var validate_sale_price = validator.isNumeric(params.sale_price);
        } catch (err) {
            return res.status(200).send({
                status: 'error',
                message: 'Faltan datos por enviar!'
            })
        }
        if (validate_name && validate_description && validate_avg && validate_barcode &&  
            validate_list_price && validate_sale_price) {

            //creo y guardo el articulo en la base de datos
            var article = new Article();
            article.barcode = params.barcode;
            article.name = params.name;
            article.description = params.description;
            article.image = `../src/products/${params.name}`;
            article.avg = default_avg;
            var price = new Price();
            price.article = article;
            price.sale_price = params.sale_price;
            price.list_price = params.list_price;
            /*article.save((err, articleStored) => {
                if (err || !articleStored) {
                    return res.status(404).send({
                        status: 'error',
                        message: 'El articulo no se a guardado'
                    });
                }
                return res.status(200).send({
                    status: 'success',
                    article: articleStored
                });
            });*/
           price.save((err, priceStored) => {
                if (err || !priceStored) {
                    return res.status(404).send({
                        status: 'error',
                        message: 'El precio no se guardo'
                    });
                }
                return res.status(200).send({
                    status: 'success',
                    price: priceStored
                });
            });

        } else {
            return res.status(200).send({
                status: 'error',
                message: 'Los datos no son correctos'
            })
        }
    },
    update: (req, res) => {
        var article_id = req.params.id;
        var params = req.body;
        try {
            var validate_name = !validator.isEmpty(params.name);
            var validate_description = !validator.isEmpty(params.description);
        } catch {
            return res.status(200).send({
                status: 'error',
                message: 'Faltan datos por enviar'
            });
        }
        if (validate_description && validate_name) {
            Article.findByIdAndUpdate({
                _id: article_id
            }, params, {
                new: true
            }, (err, articleUpdate) => {
                if (err) {
                    return res.status(500).send({
                        status: 'error',
                        message: 'Error al modificar'
                    });
                }
                if (!articleUpdate) {
                    return res.status(404).send({
                        status: 'error',
                        message: 'No existe el articulo'
                    });
                }
                return res.status(200).send({
                    status: 'success',
                    article: articleUpdate
                });
            });
        } else {
            return res.status(200).send({
                status: 'error',
                message: 'La validacion no es correcta'
            });
        }
    },
    search: (req , res) => {
        var searchString = req.params.search;

        Article.find({ "$or": [
            {"barcode": { "$regex": searchString, "$options": "i"}},
            {"name": { "$regex": searchString, "$options": "i"}},
            {"description": { "$regex": searchString, "$options": "i"}}
        ]})
        .sort([['date', 'descending']])
        .exec((err, articles) => {
            if (err){
                return res.status(500).send({
                    status:'error',
                    message: 'error en la peticion'
                });
            }
            if (!articles || articles.length <= 0){
                return res.status(404).send({
                    status:'error',
                    message: 'No hay articulos que coincidan'
                });
            }
            return res.status(200).send({
                status:'succes',
                articles
            });
        });
    },
    item_price: (req , res) => {
        //TODO
     },    
    gain: (req , res) => {
       //TODO
    }    
}

module.exports = controller;
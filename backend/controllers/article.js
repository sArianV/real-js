'use strict'
var validator = require('validator');
const { validate } = require('../models/article');
var Article = require('../models/article');
var Sale = require('../models/sale');
//var Price = require('../models/price');

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
            var validate_units = validator.isNumeric(params.units);
        } catch (err) {
            return res.status(200).send({
                status: 'error',
                message: 'Faltan datos por enviar!'
            })
        }
        if (validate_name && validate_description && validate_avg && validate_barcode &&  
            validate_list_price && validate_sale_price && validate_units) {

            //creo y guardo el articulo en la base de datos
            var article = new Article();
            article.barcode = params.barcode;
            article.name = params.name;
            article.description = params.description;
            article.image = `../src/products/${params.name}`;
            article.avg = default_avg;
            article.sale_price = params.sale_price;
            article.list_price = params.list_price;
            article.units = params.units;
            article.save((err, articleStored) => {
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
    gain: (req , res) => {
        //capturo el parametro id y compruebo que exista
        var article_id = req.params.id;
        if (!article_id || article_id == null) {
            return res.status(404).send({
                status: 'error',
                message: 'parametro incorrecto'
            });
        }
        //Busco en la BD por id y devuelvo la diferencia de precios 
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
                message: 'La ganancia de este articulo es:' ,
                Number: articles.sale_price-articles.list_price
            });

        });

    },
    stock: (req , res) => {
      //capturo el parametro id y compruebo que exista
      var article_id = req.params.id;
      if (!article_id || article_id == null) {
          return res.status(404).send({
              status: 'error',
              message: 'parametro incorrecto'
          });
      }
      //Busco en la BD por id y devuelvo la diferencia de precios 
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
              message: 'El stock de este articulo es:',
              Number: articles.units
          });

      });

    },
    sale: (req, res) => {
        var searchString = req.params.search;
        //valido el nombre del producto(no puede ser null)
        try {
            var validate_name = !validator.isEmpty(searchString);
        } catch (err) {
            return res.status(200).send({
                status: 'error',
                message: 'Nombre de articulo invalido!'
            })
        }
        if (validate_name) {
            Article.find({ "$or": [
                {"barcode": { "$regex": searchString, "$options": "i"}},
                {"name": { "$regex": searchString, "$options": "i"}},
                {"description": { "$regex": searchString, "$options": "i"}}
            ]})
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
                if (articles.units < 1){
                    return res.status(404).send({
                        status:'error',
                        message: 'No hay articulos con este nombre'
                    });
                }else{
                    var sale = new Sale();  
                    sale.article = articles;
                    //falta guardar la hs de la venta que no se como hacer
                    sale.save((err, saleStored) => {
                        if (err || !saleStored) {
                            return res.status(404).send({
                                status: 'error',
                                message: 'El articulo no se a guardado'
                            });
                        }
                        return res.status(200).send({
                            status: 'success',
                            article: saleStored
                        });
                    });
                }
            });
        } else {
            return res.status(200).send({
                status: 'error',
                message: 'No hay resultados en la busqueda'
            })
        }
    }  
}

module.exports = controller;
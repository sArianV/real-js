'use strict'

var express = require('express');
var ArticleController = require ('../controllers/article');

var router = express.Router();


// Rutas de DB
router.post('/article-delete/:id', ArticleController.delete);
router.get('/article-find/:id', ArticleController.find);
router.get('/articles/:n?', ArticleController.get);
router.post('/test-save', ArticleController.save);
router.put('/article-update/:id', ArticleController.update);

module.exports = router;
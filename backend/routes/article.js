'use strict'

var express = require('express');
var ArticleController = require ('../controllers/article');

var router = express.Router();


// Rutas de DB
router.post('/article-delete/:id', ArticleController.delete);
router.get('/articles/:n?', ArticleController.get);
router.get('/article-find/:id', ArticleController.find);
router.post('/article-save', ArticleController.save);
router.get('/article-search/:search', ArticleController.search);
router.put('/article-update/:id', ArticleController.update);
router.get('/article-gain/:id', ArticleController.gain);
router.get('/article-stock/:id', ArticleController.stock);
router.post('/article-ticket/:search', ArticleController.ticket);
//router.get('/sales/:n?', ArticleController.g);
module.exports = router;
'use strict'

var express = require('express');
var ArticleController = require ('../controllers/article');

var router = express.Router();

router.get('/testNico', ArticleController.test);

// Rutas de DB
router.post('/test-save', ArticleController.save);
router.get('/articles', ArticleController.getAll);
router.get('/article-find/:id', ArticleController.find);
router.post('/article-delete/:id', ArticleController.delete);
router.put('/article-update/:id ', ArticleController.update);

module.exports = router;
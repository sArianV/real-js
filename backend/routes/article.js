'use strict'

var express = require('express');
var ArticleController = require ('../controllers/article');

var router = express.Router();

router.get('/testNico', ArticleController.test);
router.post('/test-save', ArticleController.save);

module.exports = router;
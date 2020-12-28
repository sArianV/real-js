'use strict'

var express = require('express');
var ArticleController = require ('../controllers/article');

var router = express.Router();

router.get('/testNico', ArticleController.test);

module.exports = router;
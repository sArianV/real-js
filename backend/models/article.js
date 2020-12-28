'use strict'
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//avg TODO
var ArticleSchema = Schema({
    name: String,
    description: String, 
    avg: Number,
    date: {type: Date, default: Date.now},
    image: String
});

module.exports = mongoose.model('Article', ArticleSchema);
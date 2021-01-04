'use strict'
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//avg TODO
var ArticleSchema = Schema({
    barcode : String,
    name: String,
    trademark: String,
    category: String,
    description: String,
    list_price: Number,
    sale_price: Number,
    units:Number,
    avg: Number,
    date: {type: Date, default: Date.now},
    image: String
});

module.exports = mongoose.model('Article', ArticleSchema);
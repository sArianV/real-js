'use strict'
var mongoose = require('mongoose')
var Schema = mongoose.Schema

var ArticleSchema = Schema({
    article: {type: Schema.Types.ObjectId, ref: 'Article', required: true},
    price: {type:Number, required: true}
})

module.exports = moongose.model('Price', ArticleSchema);
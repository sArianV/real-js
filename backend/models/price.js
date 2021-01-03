'use strict'
var mongoose = require('mongoose')
var Schema = mongoose.Schema

var PriceSchema = Schema({
    article: {type: Schema.Types.ObjectId, ref: 'Article', required: true},
    sale_price: {type:Number, required: true},
    list_price: {type:Number, required: true},
    owner: {type: Schema.Types.ObjectId, ref: 'User', required: true}
})

module.exports = mongoose.model('Price', PriceSchema);
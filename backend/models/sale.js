'use strict'
var mongoose = require('mongoose')
var Schema = mongoose.Schema

var SaleSchema = Schema({
    article: {type: Schema.Types.ObjectId, ref: 'Article', required: true},
    time: Number,
    owner: {type: Schema.Types.ObjectId, ref: 'User', required: true}
})

module.exports = mongoose.model('Sale', SaleSchema);
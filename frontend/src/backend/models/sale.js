'use strict'
var mongoose = require('mongoose')
var Schema = mongoose.Schema

var SaleSchema = Schema({
    article: [{type: Schema.Types.ObjectId, ref: 'Article', required: true}],
    time: Number,
    date: {type: Date, default: Date.now},
    owner: {type: Schema.Types.ObjectId, ref: 'User'}
})

module.exports = mongoose.model('Sale', SaleSchema);
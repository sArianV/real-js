'use strict'
var mongoose = require('mongoose')
var Schema = mongoose.Schema

var UserSchema = Schema({
    name: {type:String, required: true},
})

module.exports = moongose.model('User', UserSchema);
'use strict'
var mongoose = require('mongoose')
const validator = require('validator');

var Schema = mongoose.Schema

var UserSchema = Schema({
    name: {
        type:String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        validate: (value) => validator.isEmail(value),
    },
    password: {
        type: String,
        required: true,
    },
})

module.exports = mongoose.model('User', UserSchema);
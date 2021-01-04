'use strict'
var mongoose = require('mongoose')
const validator = require('validator');

var Schema = mongoose.Schema

var UserSchema = Schema({
    name: {
        type:String,
        required: true,
        unique: true,
        validate: (value) => {
            const regexp = /^(?=.{8,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/;
            return regexp.test(value);
        },
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
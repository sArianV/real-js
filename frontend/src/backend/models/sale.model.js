'use strict'
const { Sequelize, DataTypes } = require('sequelize')

module.exports = (sequelize) => {
    var Sale = sequelize.define('Sale', {
        article: {
            type: DataTypes.UUID,
            allowNull: false,
            primaryKey: true,
            ref: 'Article'
        },
        date: {
            type: DataTypes.Date,
            default: Date.now
        },
        owner: {
            type: DataTypes.UUID,
            ref:'User'
        }
        }, 
            { sequelize, modelName: 'Sale' }
        )
    return Sale
}
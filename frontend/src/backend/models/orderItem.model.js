'use strict'
const { Sequelize, DataTypes } = require('sequelize')

module.exports = (sequelize) => {
    var OrderItem = sequelize.define('OrderItem', {
        OrderId: {
            type: DataTypes.UUID,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false,
        },
        barcode_1: {
            type: DataTypes.STRING(45),
            allowNull: false,
            primaryKey: true
        },
        UnitPrice: {
            type: DataTypes.DOUBLE(12,2),
            allowNull: false,
        },
        Quantity: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
        }, 
            { sequelize, modelName: 'Order' }
        )
    return OrderItem
}
'use strict'
const { Sequelize, DataTypes } = require('sequelize')

module.exports = (sequelize) => {
    var Order = sequelize.define('Order', {
        OrderId: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false,
        },
        OrderNumber: {
            type: DataTypes.STRING(10),
            unique: true,
        },
        CustomerId: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        OrderDate: {
            type: DataTypes.DATE,
            default: DATE.now
        },
        TotalPrice: {
            type: DataTypes.DOUBLE(12,2),
            allowNull: false,
        },
        TotalPay: {
            type: DataTypes.DOUBLE(12,2),
            allowNull: false,
        }
        }, 
            { sequelize, modelName: 'Order' }
        )
    return Order
}
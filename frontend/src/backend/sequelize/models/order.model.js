const {
    DataTypes
} = require('sequelize')

module.exports = (sequelize) => {
    var Order = sequelize.define('Order', {
        OrderId: {
            type: DataTypes.UUID,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false,
        },
        OrderNumber: {
            type: DataTypes.STRING(10),
            unique: true,
            allowNull: true
        },
        CustomerId: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        OrderDate: {
            type: DataTypes.DATE,
            default: sequelize.DATE
        },
        TotalPrice: {
            type: DataTypes.DOUBLE(12, 2),
            allowNull: false,
        },
        TotalPay: {
            type: DataTypes.DOUBLE(12, 2),
            allowNull: false,
        }
    }, {
        sequelize,
        modelName: 'Order'
    })
    return Order
}
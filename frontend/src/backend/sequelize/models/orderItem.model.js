const {
    DataTypes
} = require('sequelize')

module.exports = (sequelize) => {
    var OrderItem = sequelize.define('OrderItem', {
        OrderItemId: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false,
        },
        Barcode: {
            type: DataTypes.STRING(45),
            allowNull: false,
            primaryKey: true
        },
        UnitPrice: {
            type: DataTypes.DOUBLE(12, 2),
            allowNull: false,
        },
        Quantity: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    }, {
        sequelize,
        modelName: 'OrderItem'
    })
    return OrderItem
}
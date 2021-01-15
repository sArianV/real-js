const {
    DataTypes
} = require('sequelize')

module.exports = (sequelize) => {
    var OrderItem = sequelize.define('OrderItem', {
        OrderItemId: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
        },

        //el allownull=false en codigo de barras mepa que no va , 
        //sino como cobran algo sin codigo? como una tira de pan o caramelos 
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
const {
    DataTypes
} = require('sequelize')

module.exports = (sequelize) => {
    var Product = sequelize.define('Product', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false,
        },
        barcode_1: {
            type: DataTypes.STRING(45),
            unique: true,
            allowNull: true,
        },
        ProductName: {
            type: DataTypes.STRING(50),
            allowNull: false,
            unique: true,
        },
        SupplierId: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        BasePrice: {
            type: DataTypes.DOUBLE(12, 2),
        },
        Price: {
            type: DataTypes.DOUBLE(12, 2),
            default: 0,
        },
        Category: {
            type: DataTypes.STRING(50),
        },
        stock: {
            type: DataTypes.INTEGER,
        },
        expire_date: {
            type: DataTypes.DATE,
        },
        buy_date: {
            type: DataTypes.DATE,
        },
        trademark: {
            type: DataTypes.STRING(45),
        },
        total_profit: {
            type: DataTypes.TEXT,
        }
    }, {
        sequelize,
        modelName: 'Product'
    })
    return Product
}
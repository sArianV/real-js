'use strict'

module.exports = (sequelize) => {
    var Product = sequelize.define('Product', {
        barcode_1: {
            type: DataTypes.STRING(45),
            primaryKey: true,
            allowNull: false,
        },
        ProductName: {
            type: DataTypes.STRING(50),
            allowNull: false,
            unique: true,
        },
        SupplierId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            unique: true,
        },
        BasePrice: {
            type: DataTypes.DOUBLE(12,2),
        },
        Price: {
            type: DataTypes.DOUBLE(12,2),
            unique: true,
            default:0,
        },
        Category: {
            type: DataTypes.STRING(50),
            unique: true,
        }
        stock{
            type: DataTypes.INTEGER,
            unique: true,
        }
        expire_date{
            type: DataTypes.DATE,
            unique: true,
        }
        buy_date{
            type: DataTypes.DATE,
            unique: true,
        }
        trademark{
            type: DataTypes.STRING(45),
            unique: true,
        }
        total_profit{
            unique: true,
        }
        }, 
            { sequelize, modelName: 'Product' }
        )
    return Product
}
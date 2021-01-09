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
            type: DataTypes.STRING,
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
/* `OrderId`     int NOT NULL AUTO_INCREMENT ,
 `OrderNumber` varchar(10) NULL ,
 `CustomerId`  int NOT NULL ,
 `OrderDate`   datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ,
 `TotalPrice`  decimal(12,2) NOT NULL ,
 `TotalPay`    decimal(12,2) NOT NULL ,
   PRIMARY KEY (`OrderId`),
  UNIQUE KEY `AK1_Order_OrderNumber` (`OrderNumber`),
  KEY `FK_Order_CustomerId_Customer` (`CustomerId`),
  CONSTRAINT `FK_Order_CustomerId_Customer` FOREIGN KEY `FK_Order_CustomerId_Customer` (`CustomerId`) REFERENCES `Customer` (`CustomerId`)
'use strict';
const {  DataTypes } = require('sequelize');

module.exports = (sequelize) => {
	var Supplier = sequelize.define('SupplierID', {
      SupplierID: {
        type: DataTypes.UUID,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
      },
      CompanyName: {
        type: DataTypes.STRING,
        unique: true,
      },
      Phone: DataTypes.STRING
    }, { sequelize, modelName: 'Supplier' });
  

  return Supplier
};
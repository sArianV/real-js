'use strict';
module.exports = (sequelize) => {
  var Customer = sequelize.define('CustomerId', {
    CustomerId: {
      type: DataTypes.UUID,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    CustomerName: {
      type: DataTypes.STRING,
      unique: true,
    },
    Phone: DataTypes.STRING
  }, {sequelize, modelName: 'Customer'});
  return Customer
};

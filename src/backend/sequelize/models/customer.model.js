const {
  DataTypes
} = require('sequelize')
module.exports = (sequelize) => {
  var Customer = sequelize.define('Customer', {
    CustomerId: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    CustomerName: {
      type: DataTypes.STRING,
      unique: true,
    },
    Phone: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Customer'
  });
  return Customer
};
const {
  DataTypes
} = require('sequelize');

module.exports = (sequelize) => {
  var Supplier = sequelize.define('Supplier', {
    SupplierId: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    CompanyName: {
      type: DataTypes.STRING,
      unique: true,
    },
    Phone: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Supplier'
  });


  return Supplier
};
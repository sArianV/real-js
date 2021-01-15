const sequelize = require("../../sequelize");
var validator = require('validator');

module.exports = async ({barcode_1, ProductName, SupplierId, BasePrice , Price, Category, stock, expire_date, buy_date, trademark, total_profit }) => {
    try {
        var isValid = true;
        isValid = isValid && !validator.isEmpty(ProductName) && !validator.isEmpty(SupplierId);
    } catch (err) {
        return false;
    }
    if (isValid) {
        await sequelize.sync();
	    const product = await sequelize.models.Product.create({barcode_1, ProductName, SupplierId, BasePrice , Price, Category, stock, expire_date, buy_date, trademark, total_profit });
        await product.save();
        return true
    } else {
        return false;
    }
};
const sequelize = require("../../sequelize");
var validator = require('validator');

module.exports = async ({OrderItemID, Barcode, UnitPrice, Quantity}) => {
    try {
        var isValid = true;
        isValid = isValid && !validator.isEmpty(OrderItemID) && !validator.isEmpty(Barcode) && !validator.isEmpty(UnitPrice) && !validator.isEmpty(Quantity);
    } catch (err) {
        return false;
    }
    if (isValid) {
        await sequelize.sync();
	    const orderItem = await sequelize.models.Supplier.create({OrderItemID, Barcode, UnitPrice, Quantity});
        await orderItem.save();
        return true
    } else {
        return false;
    }
};
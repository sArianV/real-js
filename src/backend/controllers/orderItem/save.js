const sequelize = require("../../sequelize");
var validator = require('validator');

module.exports = async ({OrderNumber, CustomerId, OrderDate, TotalPrice, TotalPay}) => {
    try {
        var isValid = true;
        isValid = isValid && !validator.isEmpty(CustomerId) && !validator.isEmpty(TotalPay) && !validator.isEmpty(TotalPrice);
    } catch (err) {
        return false;
    }
    if (isValid) {
        try{
            const order = await sequelize.models.Supplier.create({OrderNumber, CustomerId, OrderDate, TotalPrice, TotalPay});
            await order.save();
            return true
        }catch{return false;}
    } else {
        return false;
    }
};
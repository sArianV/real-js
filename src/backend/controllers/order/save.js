const sequelize = require("../../sequelize");
var validator = require('validator');

module.exports = async ({OrderNumber, CustomerId, OrderDate, TotalPrice, TotalPay}) => {
    try {
        var isValid = true;
        isValid = isValid && !validator.isEmpty(CustomerId) && !validator.isEmpty(TotalPay);
    } catch (err) {
        return false;
    }
    //TODO: Total price its calculable
    if (isValid) {
        try{
            const order = await sequelize.models.Order.create({OrderNumber, CustomerId, OrderDate, TotalPrice, TotalPay});
            await order.save();
            return true
        }catch{return false;}
    } else {
        return false;
    }
};
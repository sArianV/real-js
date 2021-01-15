const sequelize = require("../../sequelize");
var validator = require('validator');

module.exports = async ({CustomerName, Phone}) => {
    try {
        var isValid = true;
        isValid = isValid && !validator.isEmpty(CustomerName);
    } catch (err) {
        return false;
    }
    if (isValid) {
        await sequelize.sync();
	    const customer = await sequelize.models.Customer.create({ CustomerName, Phone});
        await customer.save();
        return true
    } else {
        return false;
    }
};
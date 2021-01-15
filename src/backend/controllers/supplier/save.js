const sequelize = require("../../sequelize");
var validator = require('validator');

module.exports = async ({CompanyName, Phone}) => {
    try {
        var isValid = true;
        isValid = isValid && !validator.isEmpty(companyName);
    } catch (err) {
        return false;
    }
    if (isValid) {
        await sequelize.sync();
	    const jane = await sequelize.models.Supplier.create({ CompanyName, Phone});
        await jane.save();
        return true
    } else {
        return false;
    }
};
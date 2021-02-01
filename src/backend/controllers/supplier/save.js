const sequelize = require("../../sequelize");
var validator = require('validator');

module.exports = async ({ CompanyName, Phone }) => {
    try {
        var isValid = true;
        isValid = isValid && !validator.isEmpty(CompanyName);
    } catch (err) {
        return {};
    }
    if (isValid) {
        try {
            const jane = await sequelize.models.Supplier.create({ CompanyName, Phone });
            return await jane.save();

        } catch (err) {
            console.log("Err: Supplier save", err)
        }
    }
    return {};
};
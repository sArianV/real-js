const sequelize = require("../../sequelize");
var validator = require('validator');

module.exports = async ({CompanyName, Phone}) => {
    try {
        var isValid = true;
        isValid = isValid && !validator.isEmpty(CompanyName);
    } catch (err) {
        return false;
    }
    if (isValid) {
        try {
            const jane = await sequelize.models.Supplier.create({ CompanyName, Phone});
            await jane.save();
            return true
        }catch{return false;}
    } else {
        return false;
    }
};
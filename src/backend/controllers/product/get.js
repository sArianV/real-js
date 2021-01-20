const sequelize = require("../../sequelize");
var validator = require('validator');

module.exports = async ({id}) => {
    try {
        var isValid = true;
        isValid = isValid && !validator.isEmpty(id);
    } catch (err) {
        return false;
    }
    if (isValid) {
        try{
            const product = await sequelize.models.Product.findOne({
                where:{
                    id
                }
            }); 
            return product
        }catch{return false;}
    } else {
        return false;
    }
};

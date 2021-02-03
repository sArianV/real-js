const sequelize = require("../../sequelize");
var validator = require('validator');

module.exports = async () => {
    /*try {
        var isValid = true;
        isValid = isValid && !validator.isEmpty(id);
    } catch (err) {
        return false;
    }*/
        try{
            const product = await sequelize.models.Product.findAll({raw: true}); 
            return product
        }catch(err){
            console.log(err)
            return false;
        }
};

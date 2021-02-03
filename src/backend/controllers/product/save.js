const sequelize = require("../../sequelize");
var validator = require('validator');
const supplierController = require('../supplier')

module.exports = async ({barcode_1, ProductName, CompanyName, BasePrice , Price, Category, stock, expire_date, buy_date, total_profit }) => {
    try {
        var isValid = true;
        isValid = isValid && !validator.isEmpty(ProductName);
    } catch (err) {
        console.log(err)
        return false;
    }
    if (isValid) {
        try{
            const company = await sequelize.models.Supplier.findOne({
                where: {CompanyName},
                raw: true})
            let id = ""
            if(company){
                id = company.SupplierId;  
            }else{
                let aux = await supplierController.save({CompanyName})
                id = aux.SupplierId;
            }

            const product = await sequelize.models.Product.create({barcode_1, ProductName, SupplierId:id, BasePrice , Price, Category, stock, expire_date, buy_date, total_profit });
            await product.save();
            return true
        }catch(err){
            console.log(err)
            return false;
        }
    } else {
        return false;
    }
};
const sequelize = require("../../sequelize");
module.exports = async () => {
    let supp = [];
    try {
        supp = await sequelize.models.Supplier.findAll();
    } catch (err) {
        console.log(err);
    }
    return await supp;
};
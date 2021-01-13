const sequelize = require("../../sequelize");
var validator = require('validator');

module.exports = async (companyName, phone) => {
    try {
        var isValid = true;
        isValid = isValid && !validator.isEmpty(companyName);
        isValid = isValid && !validator.isEmpty(phone);
    } catch (err) {
        return res.status(200).send({
            status: 'error',
            message: 'Faltan datos por enviar!'
        })
    }
    if (isValid) {
        sequelize.sync().then();
        //es un ejemplo sin terminar para hacer cuando vuelva 
        return true;
    } else {
        return false;
    }
};
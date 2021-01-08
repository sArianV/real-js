const { Sequelize } = require('sequelize');

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './db/basedatos.sqlite'
})

console.log("Base de datos iniciada");

export default sequelize;
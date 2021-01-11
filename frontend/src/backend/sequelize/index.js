const {
	Sequelize
} = require('sequelize');
const {
	applyExtraSetup
} = require('./extra-setup');

const sequelize = new Sequelize({
	dialect: 'sqlite',
	dialectModule: 'sqlite',
	dialectModulePath: './node_modules/sequelize/lib/dialects/sqlite/index.js',
	storage: './db/basedatos.sqlite'
})

const modelDefiners = [
	require('./models/customer.model'),
	require('./models/order.model'),
	require('./models/supplier.model'),
	require('./models/orderItem.model'),
	require('./models/product.model'),
];

// We define all models according to their files.
for (let modelDefiner of modelDefiners) {
	modelDefiner(sequelize);
}

applyExtraSetup(sequelize);

console.log("Base de datos iniciada");

module.exports = sequelize;
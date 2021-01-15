const sequelize = require('./backend/sequelize');


console.log("before init")

async function assertDatabaseConnectionOk() {
	console.log(`Checking database connection...`);
	try {
		await sequelize.authenticate();
		console.log('Database connection OK!');
	} catch (error) {
		console.log('Unable to connect to the database:');
		console.log(error.message);
	}
}

async function init() {
	await assertDatabaseConnectionOk();
}

async function test(){
	console.log("test")
	await sequelize.sync();
	const jane = await sequelize.models.Supplier.create({ CompanyName: "Lo de os"});
	console.log("Jane's auto-generated ID:", jane.id);
	console.log(jane.save());
}

init();
module.exports = {test};

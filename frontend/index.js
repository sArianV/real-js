const sequelize = require('./src/backend/sequelize');


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
	const jane = await sequelize.models.supplier.create({ CompanyName: "Lo de carlitos"});
	console.log("Jane's auto-generated ID:", jane.id);
	console.log(jane.save());
}

init();

test()
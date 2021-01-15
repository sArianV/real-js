const { ipcMain } = require('electron');
const sequelize = require('./../backend/sequelize');

console.log("Mesage controll main")

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
	await sequelize.sync({ force: true });
	const jane = await sequelize.models.Supplier.create({ CompanyName: "Lo de carlitos"});
	console.log("Jane's auto-generated ID:", jane.id);
	console.log(jane.save());
}

ipcMain.on('asynchronous-message', (event, arg) => {
    console.log("*** Mensaje")
    const sql = arg;
    const eve = event;
    console.log(eve);
    console.log("------------------")
    console.log(sql);
    test()
});

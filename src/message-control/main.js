const { ipcMain } = require('electron');
const god = require('./../backend/God');
const supplierController = require('./../backend/controllers/supplier')
const Codes = require('./MessajeConst');

ipcMain.on('asynchronous-message', (event, arg) => {
	console.log("recibio mensaje")
	var result
	switch (arg.code) {
		case Codes.HOLA:
			result = god.hola(arg.param);
			break;
		case Codes.GUARDAR_USUARIO:
			result = await controladorUsuario.guardar(param)
			console.log("asd");
			break;
		case Codes.SAVE_SUPPLIER:
			result = await supplierController.save(param)
			console.log("Save_supplier");
			break;
		default:
			console.log("default")
			console.log(arg);
			break;
	}
	
	event.reply('asynchronous-reply', result);
});
 
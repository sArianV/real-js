const { ipcMain } = require('electron');
const customerController = require('./../backend/controllers/customer')
const orderController = require('./../backend/controllers/order')
const orderItemController = require('./../backend/controllers/orderItem')
const productController = require('./../backend/controllers/product')
const supplierController = require('./../backend/controllers/supplier')
const Codes = require('./MessajeConst');

ipcMain.on('asynchronous-message', (event, arg) => {
	var param = arg.param;
	var result
	switch (arg.code) {
		case Codes.SAVE_CUSTOMER:
			customerController.save(param)
			console.log("Save_Customer");
			break;
		case Codes.SAVE_ORDER:
			orderController.save(param)
			console.log("Save_order");
			break;
		case Codes.SAVE_ORDERITEM:
			orderItemController.save(param)
			console.log("Save_orderItem");
			break;
		case Codes.SAVE_PRODUCT:
			productController.save(param)
			console.log("Save_Product");
			break;
		case Codes.SAVE_SUPPLIER:
			supplierController.save(param)
			console.log("Save_supplier");
			break;
		case Codes.GET_PRODUCT:
			result = productController.get(param)
			console.log(result);
			break;	
		default:
			console.log("default")
			console.log(arg);
			break;
	}
	
	event.reply('asynchronous-reply', result);
});
 
const { ipcMain } = require('electron');
const customerController = require('./../backend/controllers/customer')
const orderController = require('./../backend/controllers/order')
const orderItemController = require('./../backend/controllers/orderItem')
const productController = require('./../backend/controllers/product')
const supplierController = require('./../backend/controllers/supplier')
const Codes = require('./MessajeConst');

ipcMain.on('asynchronous-message', (event, arg) => {
	let param = arg.param;
	let result
	switch (arg.code) {
		case Codes.SAVE_CUSTOMER:
			result = customerController.save(param)
			console.log("Save_Customer");
			break;
		case Codes.SAVE_ORDER:
			result = orderController.save(param)
			console.log("Save_order");
			break;
		case Codes.SAVE_ORDERITEM:
			result = orderItemController.save(param)
			console.log("Save_orderItem");
			break;
		case Codes.SAVE_PRODUCT:
			result = productController.save(param)
			console.log("Save_Product");
			break;
		case Codes.SAVE_SUPPLIER:
			result = supplierController.save(param)
			console.log("Save_supplier");
			break;
		case Codes.GET_PRODUCTS:
			result = productController.get()
			console.log("GET_PRODUCT");
			break;
		case Codes.GET_SUPPLIERS:
			result = supplierController.get();
			console.log("GET_SUPPLIERS");
			break;
		default:
			console.log("default")
			console.log(arg);
			result = Promise.resolve(123);
			break;
	}
	result.then((value) => {
		event.reply('asynchronous-reply', value)
	})
	
});
 
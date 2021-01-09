
function applyExtraSetup(sequelize) {
	const { customer, product, orderItem, supplier,order } = sequelize.models;
	product.hasMany(supplier);
	supplier.belongs(product);
	order.hasMany(customer);
	customer.belongs(order);
	orderItem.hasMany(order);
	order.belongs(orderItem);
	orderItem.hasMany(product);
	product.belongs(orderItem);

}
//https://github.com/sequelize/express-example/tree/master/express-main-example/sequelize
module.exports = { applyExtraSetup };

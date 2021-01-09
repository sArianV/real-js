
function applyExtraSetup(sequelize) {
	const { Customer, Product, OrderItem, Supplier, Order } = sequelize.models;
	
	Supplier.hasMany(Product);
	Product.belongsTo(Supplier);

	Customer.hasMany(Order);
	Order.belongsTo(Customer);

	OrderItem.hasMany(Order);
	Order.hasMany(OrderItem);

	Product.hasMany(OrderItem);
	OrderItem.hasMany(Product);

}
//https://github.com/sequelize/express-example/tree/master/express-main-example/sequelize
module.exports = { applyExtraSetup };

'use strict';

module.exports = function (app) {
	var order = require('../controllers/orderController');

	app.route('/orders')
		.get(order.list_all_orders)
		.post(order.create_new_order);

	app.route('/order/:orderId')
		.get(order.find_order)
		.put(order.update_order)
		.delete(order.delete_order);
};
'use strict';

var mongoose = require('mongoose');
var Order = mongoose.model('Orders');

exports.list_all_orders = function (req, res) {
	Order.find({}, function (err, order) {
		if (err) {
			res.send(err);
		}
		res.json(order);
	});
}

exports.create_new_order = function (req, res) {
	let cart = req.body;
	var orderObj = {
		order_items: req.body.cart,
		user: req.body.user
	};
	console.log(orderObj);

	var new_order = new Order(orderObj);
	new_order.save(function (err, order) {
		if (err) {
			res.send(err);
		}
		res.json(order);
	});
	
}

exports.find_order = function (req, res) {
	Order.findById(req.params.foodId, function (err, order) {
		if (err) {
			res.send(err);
		}
		res.json(order);
	});
}

exports.update_order = function (req, res) {
	Order.findOneAndUpdate({_id: req.params.orderId}, req.body, {new: true}, function (err, order) {
		if (err) {
			res.send(err);
		}
		res.json(order);
	});
}

exports.delete_order = function (req, res) {
	Order.remove({
		_id: req.params.orderId
	}, function (err, order) {
		if (err) {
			res.send(err);
		}
		res.json({message: 'Order deleted'});
	});
}
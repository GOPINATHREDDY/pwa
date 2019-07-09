'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var OrderSchema = Schema({
	user: {
		type: String,
		required: "please provide username"
	},
	order_status: {
		type: String,
		default: 'pending'
	},
	order_items: {
		type: Object
	},
	order_placed: {
		type: Date,
		default: Date.now()
	},
	order_fulfilled: {
		type: Date
	},
	order_bill: {
		type: Number
	},
	feedback: {
		type: String
	},
	rating: {
		type: Number
	}
});

module.exports = mongoose.model('Orders', OrderSchema);
'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var FoodSchema = Schema({
	created_date: {
		type: Date,
		default: Date.now()
	},
	foodname: {
		type: String,
		required: 'Kindly enter the name of the food'
	},
	foodtype: {
		type: String,
		required: 'Kindly describe the kind of food'
	},
	description: {
		type: String
	},
	price: {
		type: Number,
		required: 'Kindly enter the price of the dish'
	},
	number_of_orders: {
		type: Number,
		default: 0
	},
	rating: {
		type: Number,
		default: 0
	},
	availability: {
		type: Boolean,
		default: false
	}
});

module.exports = mongoose.model('Foods', FoodSchema);
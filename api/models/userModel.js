'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = Schema({
	created_date: {
		type: Date,
		default: Date.now()
	},
	username: {
		type: String,
		required: 'Kindly provide username'
	},
	password: {
		type: String,
		required: 'Kindly provide password'
	},
	phone: {
		type: Number,
		min: 1000000000,
		max: 9999999999
	},
	email: {
		type: String
	},
	prev_orders: {
		type: [String],
		default: []
	},
	last_login: {
		type: Date,
		default: Date.now()
	},
	last_order: {
		type: Date
	},
	registered: {
		type: Date,
		default: Date.now()
	}
});

module.exports = mongoose.model('Users', UserSchema);	
'use strict';

var mongoose = require('mongoose');
var User = mongoose.model('Users');

exports.list_all_users = function (req, res) {
	console.log("listing all users");
	User.find({}, function (err, user) {
		if (err) {
			res.send(err);
		}
		res.json(user);
	});
}

exports.create_new_user = function (req, res) {
	var new_user = new User(req.body);
	new_user.save(function (err, user) {
		if (err) {
			res.send(err);
		}
		res.send(user);
	});
}

exports.find_user_by_details = function (req, res) {
	User.findOne({username: req.body.username, password: req.body.password}, function (err, user) {
		if (err) {
			res.send(err);
		} else {
			req.session.user = user;
			res.send(user);
		}
	});
}

exports.load_homepage = function (req, res) {
	res.render('index', {user: false});
}

exports.load_login_page = function (req, res) {
	res.sendFile('login.html', {root: './public'});	
}

exports.load_register_page = function (req, res) {
	res.sendFile("register.html", {root: './public'});
}
'use strict';

module.exports = function (app) {
	// var admin = require('../controllers/adminController');
	
	app.get('/admin', function (req, res) {
		console.log(req.session.admin);
		if (req.session.admin === undefined) {
			res.redirect('/admin/login');
		} else {
			res.sendFile('/admin/dashboard.html', {root: './public'});
		}
	});

	app.get('/admin/login', function (req, res) {
		res.sendFile('/admin/admin-login.html', {root: './public'});
	});

	app.post('/admin/login', function (req, res) {
		console.log(req.session.admin);
		if (req.session.admin !== undefined) {
			res.redirect('/admin');
		}

		if (req.body) {
			console.log(req.body);
			if (req.body.username==="admin" && req.body.password==="password") {
				req.session.admin = {};
				res.redirect('/admin');
			} else {
				res.redirect('/admin/login');
			}
		} else {
			res.redirect('/admin/login', {error_msg: 'login failed'});
		}
	});

}
'use strict';

module.exports = function (app) {

	var user = require('../controllers/userController');

	app.get('/', function (req, res) {
		res.sendFile('index.html', {root: './public'});
	});
	
	app.get('/login', function (req, res) {
		res.sendFile('login.html', {root: './public'});
		// res.send('login page');
	});

	app.post('/login', function (req, res) {
		if (req.body) {
			console.log(req.body);

			if (true) {
				req.session.user = {};
				res.redirect('/cart');
			} else {
				res.send('login failed');
			}
		} else {
			res.send('login data not found');		
		}
	});

	app.get('/register', function (req, res) {
		res.send('register page');
	});

	app.post('/register', function (req, res) {
		console.log(req.body());
		res.send('register request');
	});
}
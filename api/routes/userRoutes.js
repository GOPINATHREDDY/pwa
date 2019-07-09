'use strict';

module.exports = function (app) {
	var user = require('../controllers/userController');

	app.route('/')
		.get(user.load_homepage);

	app.route('/users')
		.get(user.list_all_users)
		.post(user.create_new_user);

	app.route('/users/login')
		.get(user.load_login_page)
		.post(user.find_user_by_details);

	app.route('/users/register')
		.get(user.load_register_page)
		.post(user.create_new_user);
}
'use strict';

module.exports = function (app) {
	var food = require('../controllers/foodController');

	app.route('/foods')
		.get(food.list_all_foods)
		.post(food.create_new_food);
	
	app.route('/foodtype/:foodType')
		.get(food.list_food_by_type);

	app.route('/foods/:foodId')
		.get(food.find_a_food)
		.put(food.update_a_food)
		.delete(food.delete_a_food);
};
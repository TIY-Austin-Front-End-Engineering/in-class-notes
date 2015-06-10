var $ = require('jquery');
var Backbone = require('backbone');
Backbone.$ = $;
$(document).ready(function() {
	var App = Backbone.Router.extend({
		routes: {
			'': 'home',
			'profile': 'profile'
		},
		home: function() {
			console.log('You visited the home page');
		},
		profile: function() {
			console.log('You visited the profile page');
		}
	});

	var app = new App();
	Backbone.history.start();
	// var utilities = require('./utilities.js');
	// var myArray = [
	// 	837,
	// 	3.23,
	// 	-718,
	// 	927,
	// 	379,
	// 	24378
	// ];

	// var maxInArray = utilities.findMax(myArray);
	// console.log(maxInArray);

	// $('body').append('<div>hi there from jquery</div>');
});
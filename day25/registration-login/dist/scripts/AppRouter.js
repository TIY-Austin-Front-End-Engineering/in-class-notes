var Backbone = require('backbone');
var $ = require('jquery');
Backbone.$ = $;

module.exports = Backbone.Router.extend({
	routes: {
		'': 'home',
		'login': 'login',
		'register': 'register',
		'feed': 'feed'
	},

	home: function() {
		console.log('this is the home page');
		$('.page').hide();
		$('#home').show();
	},

	login: function() {
		console.log('this is the login page');
		$('.page').hide();
		$('#login').show();
	},

	register: function() {
		console.log('this is the register page');
		$('.page').hide();
		$('#register').show();
	},

	feed: function() {
		console.log('this is the feed page');
		$('.page').hide();
		$('#feed').show();
	}
});
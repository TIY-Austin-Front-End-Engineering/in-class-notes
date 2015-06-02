$(document).ready(function() {
	'use strict';
	var App = Backbone.Router.extend({
		routes: {
			'': 'home',
			'search/:query': 'search'
		},

		// home function that is referenced in the routes object
		home: function() {
			$('.page').hide();
			$('#home').show();
			console.log('home');
		},

		// home function that is referenced in the routes object
		search: function(query) {
			$('.page').hide();
			$('#search').show();
			console.log('search', query);
		}
	});

	var myRouter = new App();
	Backbone.history.start();

	$('#search-form').on('submit', function(e) {
		e.preventDefault(); // If you don't have this the page will refresh when you submit the form
		var query = $('#query').val();

		myRouter.navigate('search/'+query, {trigger: true});
	});
});
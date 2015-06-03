$(document).ready(function() {

	var rowString = $('#movie-row').html();
	var buildResultRow = _.template(rowString);

	// Shorthand
	// var buildResultRow = _.template($('#movie-row').html());

	var bluePrint = Backbone.Router.extend({
		routes: {
			'': 'home',
			'home': 'home', 
			'search/:query': 'search'
		}, 

		home: function() {
			console.log('home');
		}, 

		search: function(query) {
			$('#results').html('');
			console.log('search '+query);
			$.get('http://www.omdbapi.com/', {s: query}, onResultsReceived, 'json');
			
			function onResultsReceived(movieResults) {
				var newResults = movieResults.Search;
				
				for(var i=0; i<newResults.length; i++) {
					var movie = newResults[i];
					console.log(movie.Title);
					var row = buildResultRow(movie);
					$('#results').append(row);
				}
			}
		}, 
	});

	var myRouter = new bluePrint();
	Backbone.history.start();


})
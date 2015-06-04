$(document).ready(function() {

	var rowString = $('#movie-row').html();
	var buildResultRow = _.template(rowString);
	var watchList = [];

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
					movie.position = i;
					var row = buildResultRow(movie);
					$('#results').append(row);
				}

				$('#results tr').on('click', function(e) {
					
					/*
					 * position method for finding the movie
					 */
					var position = $(this).data('position');
					var movieToAdd = newResults[position];
					$('#watch-list').append('<li><a href="#">'+movieToAdd.Title+'</a></li>');


					/*
					 * imdbID method for finding the movie
					 */
					 var imdbID = $(this).data('imdbID');
					// var imdbID = $(this).attr('data-imdbID');

					/* ... using a for loop */
					// var movieToAdd = null;
					// for(var i=0; i<newResults.length; i++) {
					// 	if(newResults[i].imdbID === imdbID) {
					// 		movieToAdd = newResults[i];
					// 		break;
					// 	}
					// }

					/* ... using _.find */
					var movieToAdd = _.find(newResults, function(movie) {
						// if(movie.imdbID === imdbID) {
						// 	return true;
						// }
						// else {
						// 	return false;
						// }
						return (movie.imdbID === imdbID);
					});

					if(movieToAdd) {
						$('#watch-list').append('<li><a href="#">'+movieToAdd.Title+'</a></li>');
					}

				})
			}
		}, 
	});

	var myRouter = new bluePrint();
	Backbone.history.start();
})
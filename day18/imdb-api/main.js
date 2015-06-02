$(document).ready(function() {

	function onReceivedMovies(movies) {
		console.log('onReceivedMovies');
		console.log(movies);

		// console.log(movies.Search[0].Title);
	}

	/*
	 * Search for a list of movies
	 */
	// $.get(
	// 	// API endpoint - url where we are retreiving the info
	// 	'http://www.omdbapi.com/',
	// 	// parameters (defined on http://www.omdbapi.com/)
	// 	{
	// 		s: 'star wars',
	// 		type: ['series', 'movie']
	// 	},
	// 	// function to call when data is received
	// 	onReceivedMovies,
	// 	// format that we are expecting
	// 	'json'
	// );

	/*
	 * Get more information about an individual movie
	 */
	$.get(
		'http://www.omdbapi.com/',
		{
			i: 'tt0076759'
		},
		onReceivedMovies,
		'json'
	);
});
var Backbone = require('backbone');
var $ = require('jquery');
var _ = require('backbone/node_modules/underscore');
Backbone.$ = $;

var UserModel = require('./models/UserModel.js');
var UserCollection = require('./collections/UserCollection.js');
var AppRouter = require('./AppRouter.js');

$(document).ready(function() {
	console.log('the document is ready');
	var app = new AppRouter();
	Backbone.history.start();

	var users = new UserCollection();
	var loggedInUser = false;

	// Fetch all of the registered users
	// wait to do anything else until that fetch is complete
	users.fetch({ success: onUsersLoaded });


	// This runs once all of the registered users are fetched
	function onUsersLoaded(newlyFetchedCollection) {
		// Add event listener for register form submit
		$('#register-form').on('submit', function(e) {
			e.preventDefault();

			$('#register-error').html('');

			// Create new model
			var newUser = new UserModel({
				username: $('#register-username').val(),	// Grab values out
				password: $('#register-password').val()		// of input fields
			});

			if(!newUser.isValid()) {
				$('#register-error').html(newUser.validationError);
			}
			else {
				console.log('You should save the user');
				newUser.save();
				app.navigate('feed', {trigger: true});
			}

		});

		// Add event listener for login form submit
		$('#login-form').on('submit', function(e) {
			e.preventDefault();

			$('#login-error').html('');

			// Create new model
			var currentUser = new UserModel({
				username: $('#login-username').val(),	// Grab values out
				password: $('#login-password').val()	// of input fields
			});

			if(!currentUser.isValid()) {
				$('#login-error').html(currentUser.validationError);
			}
			else {
				// Find the first user whose username and password match the
				// ones we are trying to log in with
				loggedInUser = users.findWhere({
					username: $('#login-username').val(),
					password: $('#login-password').val()
				});

				// If a user is found, redirect them to the feed page
				if(loggedInUser) {
					app.navigate('feed', {trigger: true});
				}
				// Otherwise tell them they are not allowed in there
				else {
					$('#login-error').html('Your username / password combination is incorrect.');
				}
			}

		});
	}


});
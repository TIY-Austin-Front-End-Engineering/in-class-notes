$(document).ready(function() {
	// var user = new UserModel();
	// user.fetch();

	var App = Backbone.Router.extend({
		routes: {
			'': 'profile',
			'register': 'register',
			'edit': 'edit'
		},
		register: function() {
			$('.page').hide();
			$('#register').show();
		},
		profile: function() {
			$('.page').hide();
			$('#profile').show();
		},
		edit: function() {
			$('.page').hide();
			$('#edit').show();
			$('#name').val(user.get('name'));
			$('#inputEmail3').val(user.get('email'));
			$('#role').val(user.get('role'));
		}
	});

	var app = new App();
	Backbone.history.start();

	$('#model-form').on('submit', function(e) {
		e.preventDefault();
		console.log('form submitted');
		user.set({
			name: $('#name').val(),
			email: $('#inputEmail3').val(),
			role: $('#role').val()
		});
		user.save();
	});

	$('#register-form').on('submit', function(e) {
		e.preventDefault();

		var user = new UserModel({
			name: $('#register-name').val(),
			email: $('#register-email').val(),
			role: $('#register-role').val(),
			password: $('#register-password').val()
		});
		user.on('change', function(newModel) {
			$('.name').html(newModel.get('name'));
			$('.role').html(newModel.get('role'));
			console.log('model was changed');
		});
		user.save();
		user.get('_id')
		// user.set({
		// 	name: $('#name').val(),
		// 	email: $('#inputEmail3').val(),
		// 	role: $('#role').val()
		// });
		// user.save();
	});

	// user.on('change', function(newModel) {
	// 	$('.name').html(newModel.get('name'));
	// 	$('.role').html(newModel.get('role'));
	// 	console.log('model was changed');
	// });
});
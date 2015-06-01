$(document).ready(function() {
	var Router = Backbone.Router.extend({
		routes: {
			'home':          'foo',   // #help
			'about':         'bar',   // #about
			'projects':      'baz',   // #projects
			'profile/:name': 'test',  // #profile/Aaron
			'*notfound':     'splat'
		},

		foo: function() {
			console.log('foo');
		},

		bar: function() {
			console.log('bar');
		},

		baz: function() {
			console.log('baz');
		},

		test: function(name) {
			console.log('test', name);
		},

		splat: function() {
			console.log('splat');
		}
	});

	var myRouter = new Router();
	Backbone.history.start();

	console.log('hello');

	$('#a-link').click(function(e) {
		e.preventDefault();
		myRouter.navigate('home', {trigger: true});
	});
	$('#b-link').click(function(e) {
		e.preventDefault();
		myRouter.navigate('about', {trigger: true});
	});
	$('#c-link').click(function(e) {
		e.preventDefault();
		myRouter.navigate('projects', {trigger: true});
	});
	$('#d-link').click(function(e) {
		e.preventDefault();
		myRouter.navigate('profile/Aaron', {trigger: true});
	});


});
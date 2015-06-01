function test(myVar) {
	return myVar+1;
}

var num = 5;

test(num);
test(5);



$(document).ready(function() {
	var routerConfig = {
		routes: {
			'':              'foo',
			'home':          'foo',   // #help
			'about':         'bar',   // #about
			'projects':      'baz',   // #projects
			'profile/:name': 'test',  // #profile/Aaron
			'blog/:category/:name': 'blog',
			'helloworld':    'hello',
			'*notfound':     'splat'
		},

		foo: function() {
			console.log('foo');
			$('.page').hide();
			$('#a').show();
		},

		bar: function() {
			console.log('bar');
			$('.page').hide();
			$('#b').show();
		},

		baz: function() {
			console.log('baz');
			$('.page').hide();
			$('#c').show();
		},

		test: function(name) {
			console.log('test', name);
			$('.page').hide();
			$('#d').show();
			$('#name').html('hello '+name);
		},

		hello: function() {
			console.log('hello');
		},

		blog: function(category, title) {
			console.log(category, title);
			$('.page').hide();
			$('#d2').show();
			$('#title').html(title);
			$('#category').html(category);
		},

		splat: function() {
			console.log('splat');
			$('.page').hide();
			$('#e').show();
		}
	};

	var app = Backbone.Router.extend(routerConfig);

	var myRouter = new app();
	Backbone.history.start();

	$('#profile-button').click(function(e) {
		var option = {trigger: true};
		var profile = $('#profile').val();
		myRouter.navigate('profile/'+profile, option);

		// equivalent to above:
		// myRouter.navigate('profile/aaron', {trigger: true});
	});

	// console.log('hello');

	// $('#a-link').click(function(e) {
	// 	e.preventDefault();
	// 	myRouter.navigate('home', {trigger: true});
	// });
	// $('#b-link').click(function(e) {
	// 	e.preventDefault();
	// 	myRouter.navigate('about', {trigger: true});
	// });
	// $('#c-link').click(function(e) {
	// 	e.preventDefault();
	// 	myRouter.navigate('projects', {trigger: true});
	// });
	// $('#d-link').click(function(e) {
	// 	e.preventDefault();
	// 	myRouter.navigate('profile/Aaron', {trigger: true});
	// });


});
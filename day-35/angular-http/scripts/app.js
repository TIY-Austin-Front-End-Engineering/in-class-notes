angular.module('basic', [
	'basic.controllers',
	'basic.services'
])
.run(function() {
	console.log('hello world');
	// Put code here that should get run right as the app boots up
});
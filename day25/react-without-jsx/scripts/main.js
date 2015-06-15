var React = require('react');
var Hello = require('./components/hello.js');
React.render(
	React.createElement(Hello, null),
	document.getElementById('container')
);
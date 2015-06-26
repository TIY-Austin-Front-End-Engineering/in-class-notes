var React = require('react');

module.exports = React.createClass({
	render: function() {
		return(
			<form>
			<h1>Search Page</h1>
				<input ref = "searchBox" type = 'text' />
				<button type = "submit">Submit</button>
			</form>
		);
	}
});
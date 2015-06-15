var React = require('react');

module.exports = React.createClass({
	displayName: 'Hello',
	render: function() {
		return (
			React.createElement(
				'ul',
				{className: "commentBox"},
				[
					React.createElement(
						'li',
						{},
						'Hello'
					),
					React.createElement(
						'li',
						{},
						'World'
					)
				]
			)
		);
	}
});
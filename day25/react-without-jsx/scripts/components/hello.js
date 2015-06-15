var React = require('react');

module.exports = React.createClass({
	displayName: 'Hello',
	render: function() {
		return (
			React.createElement(
				'ul',
				{className: "commentBox", id: 'hello-list'},
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
					),
					React.createElement(
						'li',
						{},
						[
							React.createElement(
								'strong',
								{},
								'!!!!!'
							)
						]
					)
				]
			)
		);
	}
});

// <ul class="commentBox" id="hello-list">
// 	<li>Hello</li>
//	<li>World</li>
//	<li><strong>!!!!!</strong></li>
// </ul>
var React = require('react');

module.exports = React.createClass({
	getInitialState: function() {
		return {
			numLikes: 0
		};
	},
	render: function() {
		return (<button onClick={this.incrementCounter}>{this.state.numLikes} Likes</button>)
	},

	incrementCounter: function(e) {
		this.setState({
			numLikes: this.state.numLikes+1
		});
	}
});
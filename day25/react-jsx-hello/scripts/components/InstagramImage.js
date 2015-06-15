var React = require('react');

module.exports = React.createClass({
	render: function() {
		return (
			<div className="image">
				<img src={this.props.imageUrl} />
			</div>
		);
	}
});
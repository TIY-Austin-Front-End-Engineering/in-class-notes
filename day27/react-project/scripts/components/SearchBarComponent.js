var React = require('react');

module.exports = React.createClass({
	render: function() {
		return (
			<div>
				<div className="form-group">
					<input type="text" className="form-control" placeholder="Search" />
				</div>
				<button type="submit" className="btn btn-default">Submit</button>
			</div>
		);
	}
});
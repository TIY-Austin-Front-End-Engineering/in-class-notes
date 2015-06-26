var React = require('react');
var Categories = require('./CategoriesComponent');

module.exports = React.createClass({
	render: function() {
		return (
			<div className="container">
				<div className="row">
					<div className="col-sm-3">
						<Categories categories={this.props.categories} />
					</div>
					<div className="col-sm-9">
						search results go here
					</div>
				</div>
			</div>
		);
	}
});
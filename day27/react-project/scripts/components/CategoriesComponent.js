var React = require('react');

module.exports = React.createClass ({
	render: function() {

		var categoryElements = this.props.categories.map(function(model) {
			return (
				<li role="presentation" key={model.cid}>
					<a href={'#/category/'+model.get('slug')}>{model.get('name')}</a>
				</li>
			);
		});

		return (
			<ul className="nav nav-pills nav-stacked">
				{categoryElements}
			</ul>
		);
	}
});
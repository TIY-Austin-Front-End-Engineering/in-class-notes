var React = require('react');
var ItemModel = require('./models/ItemModel');
var ItemComponent = require('./components/ItemComponent.js');

// console.log('application running');
// console.log(ItemModel);

React.render(
	<ItemComponent />,
	document.getElementById('container')
)
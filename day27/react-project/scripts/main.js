var React = require('react');
var ProductPage = require('./components/ProductPageComponent');
var HomePage = require('./components/HomePageComponent');
var SearchPage = require('./components/SearchPageComponent');
var CategoryPage = require('./components/CategoryPageComponent');
var SearchBar = require('./components/SearchBarComponent');
var Backbone = require('backbone');
var CategoryCollection = require('./collections/CategoryCollection');
Backbone.$ = require('jquery');

var containerEl = document.getElementById('container');
var navSearchEl = document.getElementById('navSearch');

var cat = new CategoryCollection([
	{
		id: 1,
		name: 'butts',
		slug: 'butts'
	},
	{
		id: 2,
		name: 'non-musical instruments',
		slug: 'non-musical-instruments'
	},
	{
		id: 3,
		name: 'chef boyardee products',
		slug: 'chef-boyardee-products'
	},
	{
		id: 4,
		name: 'marbles',
		slug: 'marbles'
	},
	{
		id: 5,
		name: 'cats',
		slug: 'cats'
	},
	{
		id: 6,
		name: 'vinyl records',
		slug: 'vinyl-records'
	},
	{
		id: 7,
		name: 'rich people stuff',
		slug: 'rich-people-stuff'
	},
	{
		id: 8,
		name: 'musical instruments',
		slug: 'musical-instruments'
	},
	{
		id: 9,
		name: 'Ty beanie babies',
		slug: 'Ty-beanie-babies'
	},
	{
		id: 10,
		name: 'pokemon cards',
		slug: 'pokemon-cards'
	}
]);

React.render(
	<SearchBar />,
	navSearchEl
);

var App = Backbone.Router.extend({
	routes: {
		'': 'home',
		'category/:slug': 'category',
		'search/:query': 'search',
		'product/:id': 'product'
	},
	home: function() {
		React.render(
			<HomePage categories={cat} />,
			containerEl
		);
	},
	category: function() {
		React.render(
			<CategoryPage />,
			containerEl
		);
	},
	search: function() {
		React.render(
			<SearchPage />,
			containerEl
		);
	},
	product: function() {
		React.render(
			<ProductPage />,
			containerEl
		);
	}
});

var myApp = new App();

Backbone.history.start();
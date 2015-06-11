var $ = require('jquery');
var Backbone = require('backbone');
Backbone.$ = $;

module.exports = Backbone.Model.extend({
	defaults: {
		_id: null,
		url: null,
		caption: null
	},
	urlRoot: 'http://tiny-pizza-server.herokuapp.com/collections/aaron-imageboard-images',
	idAttribute: '_id'
});
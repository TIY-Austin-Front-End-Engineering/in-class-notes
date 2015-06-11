var $ = require('jquery');
var Backbone = require('backbone');
Backbone.$ = $;

module.exports = Backbone.Model.extend({
	defaults: {
		_id: null,
		text: null,
		imageId: null
	},
	urlRoot: 'http://tiny-pizza-server.herokuapp.com/collections/aaron-imageboard-comments',
	idAttribute: '_id'
});
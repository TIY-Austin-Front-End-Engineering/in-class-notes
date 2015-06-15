var Backbone = require('backbone');
Backbone.$ = require('jquery');

module.exports = Backbone.Model.extend({
	defaults:  {
		text: '',
		userId: null,
		createdAt: null
	},
	validate: function(attr) {
		if(!attr.text) {
			return 'You must enter a comment.'
		}
		return false;
	}
});
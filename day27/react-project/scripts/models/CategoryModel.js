var Backbone = require("backbone");
var $ = require("jquery");
Backbone.$ = $;

module.exports = Backbone.Model.extend({
	defaults: {
		id: null,
		name: null,
		slug: null
	}
});
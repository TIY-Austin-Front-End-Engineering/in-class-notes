var Backbone = require('backbone');
Backbone.$ = require('jquery');
var BlogPostModel = require('../models/BlogPostModel');

module.exports = Backbone.Collection.extend({
	model: BlogPostModel
});
var Backbone = require("backbone");
var $ = require("jquery");
Backbone.$ = $;
var CategoryModel = require('../models/CategoryModel');

module.exports = Backbone.Collection.extend({
	model: CategoryModel
});
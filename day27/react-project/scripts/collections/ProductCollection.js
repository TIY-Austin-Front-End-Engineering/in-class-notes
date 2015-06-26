var Backbone = require('backbone');
Backbone.$ = require('jquery');
var ProductModel = require('../models/ProductModel.js');

module.exports = Backbone.Collection.extend({
	model: ProductModel
});
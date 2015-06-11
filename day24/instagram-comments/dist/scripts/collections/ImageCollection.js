var $ = require('jquery');
var Backbone = require('backbone');
Backbone.$ = $;

var ImageModel = require('../models/ImageModel.js');

module.exports = Backbone.Collection.extend({
	model: ImageModel,
	url: 'http://tiny-pizza-server.herokuapp.com/collections/aaron-imageboard-images'
});
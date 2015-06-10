var $ = require('jquery');
var Backbone = require('backbone');
Backbone.$ = $;
var Item = require('../models/TodoModel.js');
module.exports = Backbone.Collection.extend({
    model: Item,
    url: 'http://tiy-fee-rest.herokuapp.com/collections/here-you-go-aaron'
});
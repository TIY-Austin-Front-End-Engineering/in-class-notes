var Item = Backbone.Model.extend({
	defaults:{
		item: null,
		completed: false,
		visible: true,
		priority: "low" 
	},
	validate: function(attr, options) {
		if(attr.item.length === 0) {
			return 'You must enter a todo item';
		}
		return false;
	},
	urlRoot: 'http://tiy-fee-rest.herokuapp.com/collections/here-you-go-aaron',
	idAttribute: '_id'

});
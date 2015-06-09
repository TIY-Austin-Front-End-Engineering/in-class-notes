var UserModel = Backbone.Model.extend({
	urlRoot: 'http://tiny-pizza-server.herokuapp.com/collections/aaron-profile',
	idAttribute: '_id',
	defaults: {
		_id: 'sdjfhksdjfhskjdhf',
		name: 'Marcus Doe',
		email: 'mdoe@gmail.com',
		role: 'Developer'
	}
});
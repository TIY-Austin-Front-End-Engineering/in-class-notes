var ItemCollection = Backbone.Collection.extend({
    model: Item,
    url: 'http://tiy-fee-rest.herokuapp.com/collections/here-you-go-aaron'
});
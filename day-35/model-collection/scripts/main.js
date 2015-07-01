var ImageModel = Backbone.Model.extend({
	defaults: {
		image: null,
		caption: null
	},
	urlRoot: 'http://tiny-pizza-server.herokuapp.com/collections/catimages'
});

var ImageCollection = Backbone.Collection.extend({
	model: ImageModel,
	url: 'http://tiny-pizza-server.herokuapp.com/collections/catimages'
});

var imageBuilder = _.template($('#image-template').html())

// console.log(ImageModel);

// var image1 = new ImageModel();
// image1.save();

// console.log(image1);

// var image2 = new ImageModel({
// 	image: 'http://cats.com/image.jpg',
// 	caption: 'This is a cat'
// });

// console.log(image2);

// image2.set({image: 'http://cats2.org/phot.jpg'});
// image2.save();
// console.log(image2);

// console.log(image1.get('image'));
// console.log(image2.get('image'));

var images = new ImageCollection();

images.on('add', function(model) {
	console.log(model);
	if(model.get('image')) {
		$('#container').append(imageBuilder(model.attributes));
	}
	// var htmlString = imageBuilder();
	// var templateInfo = {
	// 	image: 'http://www.businessinsider.com/image/4f3433986bb3f7b67a00003c/cute-cat.jpg',
	// 	caption: 'Cute cat'
	// };
	
	// console.log(htmlString);
});


images.fetch();
var $ = require('jquery');
var _ = require('backbone/node_modules/underscore');
$(document).ready(function() {
	var ImageCollection = require('./collections/ImageCollection.js');
	var ImageModel = require('./models/ImageModel.js');
	var CommentCollection = require('./collections/CommentCollection.js');
	var CommentModel = require('./models/CommentModel.js');

	var imageRowBuilder = _.template($('#image-row-template').html());
	var commentRowBuilder = _.template($('#comment-row-template').html());

	var imageList = new ImageCollection();
	var commentList = new CommentCollection();

	imageList.fetch({
		success: function() {
			commentList.fetch();
		}
	});

	$('#add-image-form').on('submit', function(e) {
		e.preventDefault();

		var imageToAdd = new ImageModel({
			url: $('#image-url-input').val(),
			caption: $('#image-caption-input').val()
		});

		imageList.add(imageToAdd);
		imageToAdd.save();
	});

	imageList.on('add', function(addedImage) {
		var imageHtml = imageRowBuilder({model: addedImage});

		$('#image-list').append(imageHtml);

		$('[data-form-cid="'+addedImage.cid+'"]').on('submit', function(e) {
			e.preventDefault();
			var $commentInput = $(this).find('.comment-input');

			var commentToAdd = new CommentModel({
				text: $commentInput.val(),
				imageId: addedImage.get('_id')
			});

			commentList.add(commentToAdd);
			commentToAdd.save();

			// console.log('comment was submitted!', addedImage.cid);

		})
	});

	commentList.on('add', function(addedComment) {
		var commentHtml = commentRowBuilder({model: addedComment});
		var imageId = addedComment.get('imageId');
		var imageModel = imageList.get(imageId);

		$('[data-cid="'+imageModel.cid+'"] .comment-list').append(commentHtml);
	});
});
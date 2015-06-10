$(document).ready(function() {
	var post = new PostModel({
		text: 'Hello world',
		comments: new CommentCollection([
			new CommentModel({
				text: 'Wrong'
			}),
			new CommentModel({
				text: 'False'
			}),
			new CommentModel({
				text: 'No way!'
			})
		])
	});

	post.get('comments').add({
		text: 'I like it'
	});

	console.log(post);

});
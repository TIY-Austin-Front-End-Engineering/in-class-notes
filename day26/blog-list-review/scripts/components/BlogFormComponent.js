var React = require('react');
var BlogModel = require('../models/BlogPostModel');

module.exports = React.createClass({
	render: function() {
		var chooseCategory = this.props.allCategories.map(function(category) {
			return ( 
				<option key={category}>{category}</option>
			);
		});
		return (
			<div>
				<form onSubmit={this.submitBlog}>
					<input type='text' ref='blogTitle' placeholder='Title goes here' /><br/>
					<select ref='blogCategory'> {chooseCategory} </select><br/>
					<textarea ref='blogText'></textarea><br/>
					<button type='submit'>Post you blog</button>
				</form>
				<div ref='errors'></div>
			</div>        
		);
	},
	submitBlog: function(e) {
		e.preventDefault();
		var blogPost = new BlogModel({
			title: this.refs.blogTitle.getDOMNode().value,
			body: this.refs.blogText.getDOMNode().value,
			category: this.refs.blogCategory.getDOMNode().value,
			createdAt: new Date()
		});
		if(!blogPost.isValid()) {
			this.refs.errors.getDOMNode().innerHTML = blogPost.validationError;
		} else {
			this.props.newPost(blogPost);
		}
	}
})
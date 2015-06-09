# GitHub Profile

## Description
Mimic the behavior of a GitHub-like profile page. When the user profile information is changed, the change should be reflected in the UI.


## Objectives

### Learning Objectives

After completing this assignment, you should…

* Understand how to use models
* Understand how to listen for events on models


### Performance Objectives

After completing this assignment, you be able to effectively use

* Backbone.Model.extend
* Model get and set methods (getters and setters)



## Details

### Deliverables

* A repo containing at least:
  * `dist/scripts/main.js`
  * `dist/scripts/models/user.js`
  * `dist/styles/styles.css`
  * `dist/index.html`

### Requirements

* No JSHint warnings or errors
* You cannot modify any HTML from within your jQuery event handlers. This must all be done by listening for events on your model.


## Normal Mode
Fork and then clone this repository. Modify the HTML and JavaScript inside of the dist directory to implement the following behavior:

1. When a user clicks on the "Home" link in the navbar they should be taken to the home page (the one with lorem ipsum).

2. When a user clicks on the "Edit Profile" link in the left sidebar or the navigation dropdown they should be taken to the edit profile page (the one with the form).

3. When a user visits the edit profile page, the form values should be set to the value that are stored in your user model.

4. When a user clicks save on the edit profile page, the current information in the form should be saved back to the user model. This should cause the UI to be updated with that information. *Remember that you can't change any HTML directly from the jQuery events (ie. submit, click, keyup, etc)*.

## Hard Mode

1. When a user saves new profile information, it should be saved to tiny pizza server and when you refresh the page, that information should be loaded from the server and displayed on the screen.


## Notes

Hint: You will want to use event listeners on your model.

## Additional Resources

* Read [Backbone Models](http://backbonejs.org/#Model)

// Target an element by its id attribute
var myBar = document.getElementById('bar');

// Target an array of elements by their class name
var myFoos = document.getElementsByClassName('foo');

// Target an array of elements by their tag name
var myDivs = document.getElementsByTagName('div');

// Target a single element by a CSS selector
var myFooLink = document.querySelector('a.foo');

// Target an array of elements by a CSS selector
var myFooLinks = document.querySelectorAll('a.foo');

// Change the inside of an element
myBar.innerHTML = 'Oh yeah!';

// Change the style of an element
myDivs[0].style.fontWeight = 'bold';
myDivs[1].style.color = 'green';

// Change the class of an element
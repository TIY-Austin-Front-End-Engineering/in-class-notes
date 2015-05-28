// var person1 = {
// 	firstName: 'Sam',
// 	lastName: 'Smith',
// 	getFullName: function() {
// 		return person.firstName+' '+person.lastName;
// 	}
// };

// var person2 = {
// 	firstName: 'Sam',
// 	lastName: 'Smith',
// 	getFullName: function() {
// 		return person2.firstName+' '+person2.lastName;
// 	}
// };

// console.log(person2.getFullName());


var button = document.getElementById('button');
var $button = $('#button');

button.addEventListener('click', onButtonClick);
$button.on('click', onButtonClick());

button.innerHtml = '1 Like';
$button.html('1 Like');

var clicks = 0;

function onButtonClick(e) {
	clicks++;
	clicks += 1;
}

function add(a, b) {
	return a+b;
}

add(1, 4);
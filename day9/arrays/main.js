var orange = {
	name: 'orange',
	round: true,
	peel: true
};
var apple = {
	name: 'apple',
	round: true,
	peel: false
};
var banana = {
	name: 'banana',
	round: false,
	peel: true
};
var kiwi = {
	name: 'kiwi',
	round: true,
	peel: true
};

// var fruits = [];
// fruits.push(orange);
// fruits.push(apple);
// fruits.push(banana);
// fruits.push(kiwi);

// var todo = ['wash car', 'do laundry' ...]

var fruits = [orange, apple, banana, kiwi];

// Checking if a variable is an array
if(Array.isArray(fruits)) {
	console.log('fruits is an array');
}
else {
	console.log('fruits is not an array');
}

if(fruits instanceof Array) {
	console.log('fruits is an array');
}
else {
	console.log('fruits is not an array');
}

// console.log(fruits.toString());


for(var i=0; i<fruits.length; i++) {
	if(fruits[i].round && fruits[i].peel) {
		console.log(fruits[i].name+' is round and has a peel');
	}
	else if(fruits[i].round && !fruits[i].peel) {
		console.log(fruits[i].name+' is round and has no peel');
	}
	else if(!fruits[i].round && fruits[i].peel) {
		console.log(fruits[i].name+' is not round and has a peel');
	}
	else {
		console.log(fruits[i].name+' is not round and has no peel');
	}
}


var cars = [
	'Toyota',
	'Honda',
	'Hyundai',
	'Audi',
	'Ford',
	'Volkswagen'
];

var mystring = 'test';
mystring.charAt(0); // works in all browsers
mystring[0]; // works in new browsers

for(var i=0; i<cars.length; i++) {
	if(cars[i].charAt(0).toLowerCase() === 'h') {
		console.log(cars[i]);
	}
}

console.log(cars);

while(cars.length > 0) {
	cars.pop();
}

console.log(cars);

// Removes the first occurrence of needle within haystack
// Returns true if needle was found, otherwise returns false
function remove(needle, haystack) {
	for(var i=0; i<haystack.length; i++) {
		if(haystack[i] === needle) {
			haystack.splice(i, 1);
			return true;
		}
	}
	return false;
}


var siblings = [
	'Josh',
	'Jamie',
	'Jason',
	'Jackie'
];
siblings.unshift('Jack');
siblings.push('Johanna');
remove('Jason', siblings);
remove('Johanna', siblings);
// siblings.splice(3,1);
// siblings.splice(0,1,'Jason');
// siblings['Jake'] = 'Jason';
// siblings[0] = 'Jason';
console.log(siblings);

// siblings.remove = function(needle) {

// };

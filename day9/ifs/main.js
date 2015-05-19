// Example 1
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

var fruit = orange;

if(fruit.round && fruit.peel) {
	console.log(fruit.name+' is round and has a peel');
}
else if(fruit.round && !fruit.peel) {
	console.log(fruit.name+' is round and has no peel');
}
else if(!fruit.round && fruit.peel) {
	console.log(fruit.name+' is not round and has a peel');
}
else {
	console.log(fruit.name+' is not round and has no peel');
}

// Example 2
var numApples = 3;
var name = 'Pat';
var sentence = null;

if(numApples === 1) {
	sentence = name+' has '+numApples+' apple';
}
else {
	sentence = name+' has '+numApples+' apples';
}

// Example 3
var backgroundColor = '#fff';
var rowNum = 7;
if(rowNum%3 === 1) {
	backgroundColor = '#ccc';
}
else if(rowNum%3 === 2) {
	backgroundColor = '#999';
}
else if(rowNum%3 === 0) {
	backgroundColor = '#333';
}


// Example 4
var firstName = 'Aaron';
var lastName = null;

if(lastName === null) {
	fullName = firstName;
}
else {
	fullName = firstName+' '+lastName;
}
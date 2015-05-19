var userInput = 'firstName';

var myObject = {
	firstName: 'Aaron',
	lastName: 'Larner',
	userInput: 'blah'
};

var firstName = 'Bob';

// console.log(myObject['firstName']);
// console.log(myObject.firstName);
// console.log(firstName);

console.log(userInput);
console.log(myObject[userInput]);
// Step 1: console.log(myObject['firstName']);
// Step 2: console.log('Aaron');
// Step 3: Show that in the console
console.log(myObject['userInput']);

var myOtherObject = {
	firstName: 'Bob',
	lastName: 'Smith',
	userInput: 'test'
};

console.log(userInput);
console.log(myOtherObject[userInput]);
// Step 1: console.log(myObject['firstName']);
// Step 2: console.log('Aaron');
// Step 3: Show that in the console
console.log(myOtherObject['userInput']);
console.log(myOtherObject.userInput);

myOtherObject['firstName'] = 'Jason';
myOtherObject.firstName = 'Jason';

myOtherObject['newProperty'] = 7;
myOtherObject.newProperty = 7;

delete myOtherObject['userInput'];
delete myOtherObject.userInput;

myOtherObject.newProperty = 9;

myObject.userInput = ['hi', 'there'];

myObject['userInput'].push = 7;

console.log(myObject);
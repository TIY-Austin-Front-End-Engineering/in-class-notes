// var todoItem1 = 'Wash Car';
// var todoItem2 = 'Water Plants';
// var todoItem3 = 'Do Dishes';
// var todoItem4 = 'Walk Dog';

// console.log(todoItem1);
// console.log(todoItem2);
// console.log(todoItem3);
// console.log(todoItem4);

var myTodoList = [
	'Wash Car',
	'Water Plants',
	'Do Dishes',
	'Walk Dog'
	// 'Grade Homework',
	// 'Sleep'
];

myTodoList.push('Grade Homework yo!');
myTodoList.unshift('Sleep');

// console.log(myTodoList.length);
// myTodoList.splice(2, 2);
// console.log(myTodoList.length);
var lastElement = myTodoList.pop();
console.log(lastElement);

console.log('----------');

for(var i = 0; i < myTodoList.length; i++){
	console.log(myTodoList[i]);
}

var myStringArray = [
	'W',
	'a',
	's',
	'h',
	' ',
	'C',
	'a',
	'r'
];

// myTodoList[0] = '1. '+myTodoList[0];
// myTodoList[1] = '2. '+myTodoList[1];
// myTodoList[2] = '3. '+myTodoList[2];
// myTodoList[3] = '4. '+myTodoList[3];
// myTodoList[4] = '5. '+myTodoList[4];

// console.log(myTodoList[2]);

// for(var i=0; i<myTodoList.length; i++) {
// 	myTodoList[i] = (i+1)+'. '+myTodoList[i];
// 	console.log(myTodoList[i]);
// }



// var secondTodo = 1;

// console.log(myTodoList[0]);
// console.log(myTodoList[secondTodo]);
// console.log(myTodoList.length);
// console.log(myTodoList[3]);

// myTodoList[3] = 'Walk Dogs';

// console.log(myTodoList[3]);


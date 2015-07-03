'use strict';

/****************************************/
/*                                      */
/*             let vs. var              */
/*                                      */
/****************************************/

// if(true) {
// 	var myVar2 = 'test';
// 	console.log('myVar2 in if', myVar2);
// }

// console.log('myVar2 outside if', myVar2);

// // // vs

// if(true) {
// 	let myVar1 = 'test';
// 	console.log('myVar1 in if', myVar1);
// }

// console.log('myVar1 outside if', myVar1);

/****************************************/
/*                                      */
/*         let hoisting example         */
/*              goes here               */
/****************************************/
// var test = 'hello';

// function run() {
// 	if(test) {
// 		let test = 'goodbye';
// 		console.log(test);
// 	}

// 	console.log(test);
// }

// run();

/****************************************/
/*                                      */
/*               constants              */
/*                                      */
/****************************************/

// const PI = 3.141593;

// var PI = 7;

// console.log(PI);

/****************************************/
/*                                      */
/*                arrows                */
/*                                      */
/****************************************/

// var test = (a, b) => {
// 	if(a > b) {
// 		return a;
// 	}
// 	else {
// 		return b;
// 	}
// }


// var $ = require('jquery');

// var toEatList = {
// 	food: [],
// 	add: function(f) {
// 		console.log(this);
// 		$.post(
// 			'http://tiny-pizza-server.herokuapp.com/collections/toeat',
// 			{food: f},
// 			(result) => {
// 				console.log(this);
// 				this.food.push(result);
// 				console.log(this.food);

// 				// (
// 				// 	() => {
// 				// 		console.log('test');
// 				// 		console.log(this)
// 				// 	}
// 				// )();

// 				((a, b) => {
// 					console.log('test', a);
// 					console.log(this)
// 				})('blah');
// 			}
// 		);
// 	}
// }

// toEatList.add('pasta');

/****************************************/
/*                                      */
/*               imports                */
/*                                      */
/****************************************/

// import obj from './number';
// // var obj = require('./number');

// console.log(obj);

// import { test, hello } from './fancy-import';

// import test2 from './fancy-import';

// console.log(test);
// console.log(hello);
// console.log(test2);

// import * as fancy from './fancy-import';

// console.log(fancy);

/****************************************/
/*                                      */
/*            destructuring             */
/*                                      */
/****************************************/

// var path = 'Users/alarner/Projects/test/foo/bar';

// var [a, b, c, ... d] = path.split('/');

// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);

// var id = 'post-23';

// var pieces = id.split('-');
// var type = pieces[0];
// var id = pieces[1];

// var [type, id] = pieces.split('-');


/****************************************/
/*                                      */
/*             teamplating              */
/*                                      */
/****************************************/

// var person = {
// 	firstName: 'Bob',
// 	lastName: 'Smith'
// }

// // var string = 'Hello '+person.firstName+' '+person.lastName+'. Weclome to ES2015!';

// var string = `Hello ${person.firstName} ${person.lastName}.
// Welcome to ES2015!`;

// console.log(string);

/****************************************/
/*                                      */
/*               classes                */
/*                                      */
/****************************************/

// class Animal {
// 	constructor() {
// 		// console.log('start constructor');
// 		this.name = '';
// 		this.type = '';
// 		this.color = '';
// 		this.numLegs = 4;
// 		this.sound = '::silence::';
// 		// console.log('end constructor');
// 	}

// 	speak() {
// 		console.log(this.sound);
// 	}
// }

// // console.log('before instantiate Animal');
// // var cat = new Animal();
// // console.log(cat);

// class Cat extends Animal {
// 	constructor() {
// 		super();
// 		this.type = 'cat';
// 		this.sound = 'meow';
// 	}
// }

// class Spider extends Animal {
// 	constructor() {
// 		super();
// 		this.numLegs = 8;
// 		this.eyes = 12;
// 		this.type = 'spider';
// 	}
// }

// var sammy = new Cat();
// var charlotte = new Spider();
// charlotte.name = 'charlotte';

// console.log(sammy, charlotte);

// sammy.speak();
// charlotte.speak();


/****************************************/
/*                                      */
/*              promises                */
/*                                      */
/****************************************/
// function timeout(duration = 0) {
//     return new Promise((resolve, reject) => {
//         setTimeout(resolve, duration);
//     })
// }

// var p = timeout(1000).then(() => {
//     return timeout(2000);
// }).then(() => {
//     throw new Error("hmm");
// }).catch(err => {
//     return Promise.all([timeout(100), timeout(200)]);
// })

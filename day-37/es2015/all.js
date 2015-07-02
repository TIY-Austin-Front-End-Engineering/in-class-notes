(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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

// // vs

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

/****************************************/
/*                                      */
/*               constants              */
/*                                      */
/****************************************/

// const PI = 3.141593;

// PI = 7;

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
// 		$.post(
// 			'http://tiny-pizza-server.herokuapp.com/collections/toeat',
// 			{food: f},
// 			function(result) => {
// 				this.food.push(result);
// 				console.log(this.food);
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

// import number from './number';

// console.log(number);

// import { test, hello } from './fancy-import';

// console.log(test);
// console.log(hello);

// import * as fancy from './fancy-import';

// console.log(fancy);

/****************************************/
/*                                      */
/*            destructuring             */
/*                                      */
/****************************************/

// var path = 'Users/alarner/Projects';

// var [a, b, c] = path.split('/');

// console.log(a);
// console.log(b);
// console.log(c);

/****************************************/
/*                                      */
/*             teamplating              */
/*                                      */
/****************************************/

// var person = {
// 	firstName: 'Bob',
// 	lastName: 'Smith'
// }

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
// 		this.name = '';
// 		this.type = '';
// 		this.color = '';
// 		this.numLegs = 4;
// 		this.sound = '::silence::';
// 	}

// 	speak() {
// 		console.log(this.sound);
// 	}
// }

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
// 		this.type = 'spider';
// 	}
// }

// var sammy = new Cat();
// var charlotte = new Spider();

// console.log(sammy, charlotte);

// sammy.speak();
// charlotte.speak();

},{}]},{},[1])


//# sourceMappingURL=all.js.map
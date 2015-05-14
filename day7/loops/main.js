function* guessingGame() {
	// Do while example:

	// var complete = false;
	// var answer = null;
	// do {
	// 	answer = yield game.ask('Would you like to continue, type "Yes" or "No"');
	// 	console.log(answer);
	// 	if(answer === 'Yes' || answer === 'No') {
	// 		complete = true;
	// 	}
	// } while(!complete);
	// //while(complete === false)

	// if(answer === 'Yes') {
	// 	yield game.say('You decided to continue');
	// }
	// else {
	// 	yield game.say('The end');
	// }

	// While example:
	// var complete = false;
	// var answer = null;
	// while(!complete) {
	// 	answer = yield game.ask('Would you like to continue, type "Yes" or "No"');
	// 	console.log(answer);
	// 	if(answer === 'Yes' || answer === 'No') {
	// 		complete = true;
	// 	}
	// }
	// //while(complete === false)

	// if(answer === 'Yes') {
	// 	yield game.say('You decided to continue');
	// }
	// else {
	// 	yield game.say('The end');
	// }
}

var currentNumber = 1;
var currentTotal = 0;

while(currentNumber <= 100) {
	currentTotal = currentTotal + currentNumber;
	currentNumber++; // shorthand for: currentNumber = currentNumber + 1
}

// currentNumber += 7 is shorthand for currentNumber = currentNumber + 7


console.log(currentTotal);

var currentTotal = 0;
for(var i=2; i<=100; i+=2) {
	currentTotal += i; // shorthand for currentTotal = currentTotal + i
}

console.log(currentTotal);

console.log(11%3);

for(var i=1; i<=100; i++) {
	if(i%3 === 0 && i%5 === 0) {
		console.log('fiz buzz');
	}
	else if(i%3 === 0) {
		console.log('fiz');
	}
	else if(i%5 === 0) {
		console.log('buzz');
	}
	else {
		console.log(i);
	}
}

// var foo = 10;

// while(foo) {
// 	console.log(foo);
// 	foo = foo - 1;
// }

// var foo = 0;
// while(foo < 20) {
// 	foo = foo + 1;
// 	console.log('foo = '+foo);
// }

// console.log('while loop complete');

// var foo = 20;
// do {
// 	foo = foo + 1;
// 	console.log('foo = '+foo);
// } while(foo < 20);

// console.log('while loop complete');

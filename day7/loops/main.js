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

	var complete = false;
	var answer = null;
	while(!complete) {
		answer = yield game.ask('Would you like to continue, type "Yes" or "No"');
		console.log(answer);
		if(answer === 'Yes' || answer === 'No') {
			complete = true;
		}
	}
	//while(complete === false)

	if(answer === 'Yes') {
		yield game.say('You decided to continue');
	}
	else {
		yield game.say('The end');
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

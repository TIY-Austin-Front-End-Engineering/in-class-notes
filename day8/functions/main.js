// function add(a, b) {
// 	var result = a + b;
// 	var otherResult = a - b;
// 	// return result;
// }

// var sum = add(4, 5);
// console.log(sum);
// var sum2 = add(7, 3);
// console.log(sum2);

// function greet(name) {
// 	console.log('Hello '+name);
// 	return 'Hiya';
// }

// var AaronGreeting = greet('Aaron');
// console.log(AaronGreeting);

// var test = console.log('Hello world!');
// console.log(test);

// function foo(a, b) {
// 	console.log(a);
// 	console.log(b);

// 	return 7;
// }

// var fooResult = foo('1.6', '9');
// console.log(fooResult + 4);

function checkData(inputString) {
	if(typeof inputString !== 'string') {
		throw 'Invalid Input';
	}
	if(inputString.length === 3) {
		return true;
	}
	else {
		return false;
	}
}

var isLengthThree = checkData(777);

console.log(isLengthThree);

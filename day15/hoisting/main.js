// foo();
// bar();

// function foo() {
// 	console.log('foo');
// }

// function bar() {
// 	console.log('bar');
// }

// var name = 'Aaron';

// function changeName() {
// 	if(name) {
// 		name = 'Aaron Larner';
// 	}
// 	return name;
// }

// var newName = changeName();
// console.log(newName);

function foo() {

	if(bar) {
		console.log('test');
	}
	else {
		console.log('other');
	}

	function bar() {
		console.log('bar');
	}

	var bar = 7;
}

foo();
var myObject = {
	foo: 'hello',
	bar: 'world',
	baz: 'test'
};

console.log(myObject);

myObject.foo = 'new foo';

console.log(myObject.foo);

var fooVar = myObject.foo + ' var';

console.log(fooVar);

console.log(myObject);

myObject['foo'] = 'another foo';

console.log(myObject);

var randomProperty = null;
var randomNumber = Math.random();
if(randomNumber < 0.33) {
	randomProperty = 'foo';
}
else if(randomNumber >= 0.33 && randomNumber < 0.66) {
	randomProperty = 'bar';
}
else {
	randomProperty = 'baz';
}

myObject[randomProperty] = 'THIS PROPERTY WAS SELECTED';

console.log(myObject);

delete myObject.foo;

console.log(myObject);

for(var propertyName in myObject) {
	console.log(propertyName);
	console.log(myObject[propertyName]);
}


pets[1].age = 7;


[1,2,3] [4,5,6] => [1,2,3,4,5,6]
[] ['a','c','b'] => ['a', 'c', 'b']
[true, 'a', 'false'] [{foo: 'bar'}] => [true, 'a', 'false', {foo: 'bar'}]


function concatenateArrays(a, b) {
	// create a new array that will hold the result
	// iterate over a and add its elements to the new array
	// iterate over b and add its elements to the new array
	// return the array that I create

	var result = [];

	for(var i=0; i<a.length; i++) {
		result.push(a[i]);
	}

	for(var i=0; i<b.length; i++) {
		result.push(b[i]);
	}

	return result;

	// return a.concat(b);
}





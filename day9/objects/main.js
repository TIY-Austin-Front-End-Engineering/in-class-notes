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

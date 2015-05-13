// what a data literal is
5
'5'
'hello world'

//Not a data literal

var x = '17';

// x is not a data literal



// how to define a variable
var foo = false;
var foo;
foo = false;

// how to redefine a variable
foo = true;
foo = 'a';

// how to compare two variables or literals using an operator
'a' == 'a'
5 > 7

var foo = 17;
var bar = 0.5;

foo > bar
foo < bar

// how to compare more than two variables or literals using an operator (Please Excuse My Dear Aunt Sally)
foo < bar || 5 > 7

// how to compare two or more variables and literals using an operator

// how to evaluate any expression to a Boolean
if(true) {
	// run this code
}

if('a') {
	// run this code
}

if('') {
	// don't run this code
}

// falsey values
''
null
undefined
0


// the different between true and Truthy, false and Falsy

true // true
'a' // truthy

// how to evaluate two number variables using mathematical operators such as +, -, *, /, ^
var foo = 7;
var bar = 94;

foor + bar

// how to evaluate two number literals using mathematical operators such as +, -, *, /, ^

6+9

// how to evaluate more than two number variables using mathematical operators (Please Excuse My Dear Aunt Sally)

var foo = 7;
var bar = 5;
var baz = 3;
var test = 4;

foo*(bar-baz) + test	// 18

// how to evaluate more than two number variables and literals using mathematical operators (Please Excuse My Dear Aunt Sally)

// how to append two string literals
'foo '+'bar'

// how to append two string variables together
var foo = 'Aaron ';
var bar = 'Larner';
foo + bar;	// 'Aaron Larner'

// how to append two or more string literals and string varaiables together
var foo = 'Bob';
var bar = 'Smith';
foo + ' ' + bar;

// how to use if, elseif, and else on variables and literals
var foo = true;
if(foo) {
	// this code will run
}

// how to evaluate the condition in an if statement as a boolean
var foo = 'a';
var bar = 0;
if(bar) {
	// do something
}
else if(foo) {
	// do something else
}
else {
	// do a third thing
}

// why we need to type cast

var input = '29.7';

// string -> number: parseInt .. for whole numbers / parseFloat ... for numbers with decimals
var myAgeInTenYears = parseInt(input) + 10;

// anything -> string: parseInt / parseFloat
var foo = 26;
foo.toString();

''+26

// anything -> boolean
Boolean(0) // false
Boolean('foo') // true

// how to type cast between Strings, Numbers, Booleans, Arrays and Objects
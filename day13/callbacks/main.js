var array = [
	'Obama',
	'Bush',
	'Clinton',
	'Bush',
	'Reagan'
];

function iterate(myArray, myFunction) {
	for(var i=0; i<myArray.length; i++) {
		myFunction(myArray[i]);
	}
}

function greetPresident(presidentName) {
	console.log('Hello President '+presidentName);
}

function hecklePresident(presidentName) {
	console.log('President '+presidentName+' you are silly');
}

iterate(array, hecklePresident);


function filter(myArray, myFunction) {
	var resultArray = [];
	for(var i=0; i<myArray.length; i++) {
		if(myFunction(myArray[i])) {
			resultArray.push(myArray[i]);
		}
	}
	return resultArray;
}

function startsWithB(myString) {
	if(myString.charAt(0).toLowerCase() === 'b') {
		return true;
	}
	else {
		return false;
	}
}

var filteredArray = filter(array, startsWithB);

var filteredArray1 = _.filter(array, function(myString) {
	if(myString.length > 5) {
		return true;
	}
	else {
		return false;
	}
});

console.log(filteredArray1);

console.log(_.unique(array));

// function myFirstFunction() {
// 	console.log('run my first function');
// }

// var mySecondFunction = function() {
// 	console.log('my second function');
// };

// var myFancyObject = {
// 	myThirdFunction: function() {
// 		console.log('my third function');
// 	},
// 	myFourthFunction: function() {
// 		console.log('my fourth function');
// 	},
// 	myFirstString: 'Foo'
// };

// myFirstFunction();
// mySecondFunction();

// console.log(myFancyObject.myThirdFunction);
// console.log(myFancyObject.myFirstString);

// myFancyObject.myThirdFunction();
// myFancyObject.myFirstString();


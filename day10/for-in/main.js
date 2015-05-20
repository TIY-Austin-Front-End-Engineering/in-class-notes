function countLetters(inputString) {
	// Keep track of the number of times each letter appears
	var letterCount = {};

	// Iterate over every character in the string
	for(var i=0; i<inputString.length; i++) {

		// Keep track of the current character
		var currentLetter = inputString.charAt(i);

		// If the current character is not already a property in
		// the letterCount object, add it as a property with a
		// value of 1
		if(!letterCount.hasOwnProperty(currentLetter)) {
			letterCount[currentLetter] = 1;
		}
		// Otherwise increment the letter count for that property
		// by 1
		else {
			letterCount[currentLetter]++;
		}
	}

	// When deisplaying information in HTML we need to convert
	// it to a string first, because HTML doesn't understand
	// what objects or arrays are.

	// Create an empty array to keep track of the property
	// name / value pairs
	var outputArray = [];

	// Iterate over each property in the letterCount object
	for(var propertyName in letterCount) {
		// Keep track of the property value
		var value = letterCount[propertyName];

		// Add a string of the property name then a ':' then
		// the property value to our outputArray
		outputArray.push(propertyName + ': ' + value);
	}

	// Join all of the elements in the outputArray with
	// commas and return the resulting string.
	return outputArray.join(', ');
}

function getBookInformation(whatInformation) {
	var book = {
		isbn: '9834n394',
		title: 'Game of Thrones',
		author: 'George R.R. Martin',
		datePublished: 'May 12, 1996'
	};

	// The short, good way
	return book[whatInformation];

	// The long, bad way
	if(whatInformation === 'author') {
		console.log(book.author)
	}
	else if(whatInformation === 'isbn') {
		book.isbn
	}
	else if {
		...
	}
}
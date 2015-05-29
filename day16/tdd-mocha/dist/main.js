function rovarsprocket(string) {
	if(typeof string !== 'string') {
		throw 'You can only pass a string into this function.';
	}

	var vowels = 'aeiouAEIOU';
	var resultString = '';

	for(var i=0; i<string.length; i++) {
		var currentCharacter = string.charAt(i);
		if(!validator.isAlpha(currentCharacter)) {
			throw 'You can only pass an alphabetic string into this function.';
		}
		if(vowels.indexOf(currentCharacter) !== -1) {
			resultString += currentCharacter;
		}
		else {
			resultString += currentCharacter + 'o' + currentCharacter;
		}
	}
	return resultString;
}

var myString = 'this is a test';
var position = myString.indexOf('i');
// 2
var position = myString.indexOf('z');
// -1
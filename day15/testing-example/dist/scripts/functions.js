function add(number1, number2) {
	var result = parseFloat(number1) + parseFloat(number2);
	console.log (result)
	return result
}

function subtract(number1, number2) {
	if(typeof number1 !== 'string') {
		throw 'Invalid Input';
	}
	var result = parseFloat(number1) - parseFloat(number2);
	console.log (result)
	return result
}

function tax(subtotal,taxpercentage){
	var result= parseFloat(subtotal)* parseFloat(taxpercentage)/100;
	console.log (result)
	return result

}

function stringLength(string){
	if (string.length < 5){
		return "short string";
	}
	else if (string.length > 5 && string.length < 10){
		return "medium string";
	}	
	else if (string.length > 10){
		return "long string"
	}

}

function startsWith(string) {
	if (string.charAt(0)=== "a" || string.charAt(0)=== "A"){
		return "starts with A";
	}
	else if (string.charAt(0)=== "b" || string.charAt(0)=== "B"){
		return "starts with B";
	}
	else if (string.charAt(0)=== "c" || string.charAt(0)=== "C"){
		return "starts with C";
	}
	else if (string.charAt(0)=== "d" || string.charAt(0)=== "D"){
		return "starts with D";
	}
	else if (string.charAt(0)=== "e" || string.charAt(0)=== "E"){
		return "starts with E";
	}
	else {
		return "starts with something else"
	}

}

// function stringRepeat(string, number) {
	  

// 	}








// function countLetters(inputString) {
// 	var numAs = 0;
// 	for var i=0; i< inputstring.length; i++) {
// 		if (inputString.charAt(i) === 'a') {
// 			numAs = nuMas +1;
// 		}
// }
// 	return numAs



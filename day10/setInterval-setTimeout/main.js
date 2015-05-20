function runAfterTenSeconds() {
	console.log('... ran after 10 seconds');
}

// Run a function once after a specified period of time
setTimeout(runAfterTenSeconds, 10000);

var counter = 0;
function incrementCounter() {
	counter++;
	var c = document.getElementById('counter');
	c.innerHTML = counter.toString();

	// Stop an interval when the counter reaches 10
	if(counter >= 10) {
		clearInterval(intervalId);
	}
}
// Run a function continuously after a specified period of time
var intervalId = setInterval(incrementCounter, 1000);
console.log(intervalId);


// Animate
var boxElement = document.querySelector('.box');
boxElement.style.width = '20px';
boxElement.style.height = '20px';
boxElement.style.backgroundColor = 'red';

function moveLeft() {
	var currentMargin = boxElement.style.marginLeft;
	if(currentMargin == '') {
		currentMargin = 0;
	}
	var newMargin = parseInt(currentMargin) + 1;
	console.log(newMargin);
	boxElement.style.marginLeft = newMargin+'px';
	console.log(boxElement.style.marginLeft);
}

setInterval(moveLeft, 50);




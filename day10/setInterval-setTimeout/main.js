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
}
// Run a function continuously after a specified period of time
setInterval(incrementCounter, 1000);

// Stop an interval

// Animate
function onButtonClick(eventObj) {
	console.log('thanks for clicking');
	console.log(eventObj);
	console.log(this);
}

var myButton = document.getElementById('click-me');

console.log(myButton);

myButton.addEventListener('click', onButtonClick);

var parent = document.getElementById('parent');
parent.addEventListener('click', onButtonClick);
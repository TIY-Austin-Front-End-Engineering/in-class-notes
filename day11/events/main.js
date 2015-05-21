document.getElementById('click-me');
var clickMeButton=document.getElementById('click-me');
clickMeButton.addEventListener('click',clickBox);
var myBox=document.getElementById('box');
var currentMargin = 0;
function clickBox(){
	currentMargin += 20;
	myBox.style.marginLeft = currentMargin+'px';
	// console.log ('clickBox');
	// var currentMargin = myBox.style.marginLeft;
	// if(currentMargin == '') {
	// 	currentMargin = '0';
	// }
	// currentMargin = parseInt(currentMargin);
	// console.log(currentMargin);
	// currentMargin += 20;
	// console.log(currentMargin);
	// myBox.style.marginLeft = currentMargin+'px';
	// console.log(myBox.style.marginLeft);

}

// var input = document.getElementById("message");
// var messageList = document.getElementById("message-list");

// input.addEventListener("keyup",appendMessage);

// function appendMessage(event){
// 	console.log(event);
// 	if(event.keyCode === 13){
// 		messageList.innerHTML += "<div>"+input.value+"</div>";
// 		input.value = "";
// 	}
// }


// var myButton = document.getElementById('click-me');
// var messageInput = document.getElementById('message');
// var messageList = document.getElementById('message-list');
// myButton.addEventListener('click', onButtonClick);
// var state = false;

// function onButtonClick(eventObj) {
// 	console.log('onButtonClick');
// 	state = !state;
// 	console.log(state);

// 	if(state) {
// 		myButton.innerHTML = 'State is true';
// 	}
// 	else {
// 		myButton.innerHTML = 'State is false';
// 	}

// 	messageList.innerHTML += '<div>' + messageInput.value + '</div>';
// 	// messageList.innerHTML = messageList.innerHTML + '<div>' + messageInput.value + '</div>';

// 	// console.log(messageInput.value);
// }



// // var parent = document.getElementById('parent');
// // parent.addEventListener('click', onButtonClick);
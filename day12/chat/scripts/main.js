$(document).on('ready', start);
// document.querySelectorAll(document).addEventListener('ready', start)

function start(e) {
	
	setInterval(getMessages, 500);

	function getMessages() {
		$.get(
			'http://tiny-pizza-server.herokuapp.com/collections/austin',
			onMessagesReceived,
			'json'
		);
	}

	function onMessagesReceived(data) {
		var myHtml = render(data);
		var $messageList = $('#message-list');
		$messageList.html(myHtml);
	}

	function render(messages) {
		var returnHtml = '';
		for(var i=0; i<messages.length; i++) {
			var currentMessage = messages[i];
			if(currentMessage.hasOwnProperty('username') && currentMessage.hasOwnProperty('text')) {
				returnHtml = returnHtml + '<div>' + currentMessage.username + ': ' + currentMessage.text + '</div>';
			}
		}
		return returnHtml;
	}
}
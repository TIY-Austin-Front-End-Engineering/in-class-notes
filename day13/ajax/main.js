$(document).on('ready', start);

function start(e) {

	$('#my-button').on('click', onButtonClick);

	function onButtonClick(e) {
		var myMessage = {
			username: 'Mr. T',
			text: 'I pitty the fool'
		};
		$.post(
			'http://tiny-pizza-server.herokuapp.com/collections/austin/',
			myMessage
		);
	}
	
	function getMessages() {
		$.get(
			'http://tiny-pizza-server.herokuapp.com/collections/austin/',
			onMessagesReceived,
			'json'
		);
	}

	function onMessagesReceived(messageList) {
		var htmlString = '';
		for(var i=0; i<messageList.length; i++) {
			var message = messageList[i];
			if(message.hasOwnProperty('username') && message.hasOwnProperty('text')) {
				htmlString += '<div>'+message.username+' - '+message.text+'</div>';
			}
		}

		$('#chat').html(htmlString);
	}

	setInterval(getMessages, 500);

	getMessages();
}
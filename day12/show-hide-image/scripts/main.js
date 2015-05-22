$(document).on('ready', start);
// document.querySelectorAll(document).addEventListener('ready', start)

function start(e) {

	var $button = $('#toggle');
	$button.on('click', showHide);

	function showHide(e) {
		console.log('showHide');
	}
	
}
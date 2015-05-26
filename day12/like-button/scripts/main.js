$(document).on('ready', start);
// document.querySelectorAll(document).addEventListener('ready', start)

function start(e) {

	var $button = $('#toggle');
	$button.on('click', showHide);

	var $image = $('.image');
	var visible = true;

	function showHide(e) {
		console.log('showHide');
		if(visible === true) {
			visible = false;
		}
		else if(visible === false) {
			visible = true;
		}

		var newCss = {};

		if(visible) {
			newCss.display = 'block';
			// $image.css({
			// 	display: 'block'
			// });
			$image.css(newCss);
		}
		else {
			newCss.display = 'none';
			// $image.css({
			// 	display: 'none'
			// });
			$image.css(newCss);
		}

	}
	
}
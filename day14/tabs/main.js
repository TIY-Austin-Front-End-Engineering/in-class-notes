$(document).on('ready', function(e) {

	var contentArray = [];

	var $addTabForm = $('#add-tab-form');
	var $tabName = $('#tab-name');
	var $tabContent = $('#tab-content');
	var $nav = $('nav');
	var $main = $('main');

	$addTabForm.on('submit', function(e) {
		e.preventDefault();
		console.log('hi there');

		var newTab = {
			name: $tabName.val(),
			content: $tabContent.val()
		};

		contentArray.push(newTab);

		$nav.append('<a href="#'+newTab.name+'">'+newTab.name+'</a>');

		$main.append('<section id="'+newTab.name+'">'+newTab.content+'</section>');

		console.log(contentArray);

		localStorage.setItem('savedTabs', JSON.stringify(contentArray));
	});
	



	// OLD TAB CODE
	// Code that runs when the page loads
	var contentString = localStorage.getItem('savedTabs');
	contentArray = JSON.parse(contentString);
	console.log(contentString);
	console.log(contentArray);

	for(var i=0; i<contentArray.length; i++) {
		var newTab = contentArray[i];
		
		$nav.append('<a href="#'+newTab.name+'">'+newTab.name+'</a>');
		$main.append('<section id="'+newTab.name+'">'+newTab.content+'</section>');
	}


	var $targetSection = $(window.location.hash);
	if(!$targetSection.length) {
		$targetSection = $('main section').eq(0);
	}
	$targetSection.show();

	$('nav a[href="#'+$targetSection.attr('id')+'"]').addClass('active');

	// Code that runs when I click on a nav link
	$('nav').on('click', function(e) {
		var $target = $(e.target);
		var targetName = $target.attr('href');
		$('main section').hide();
		$(targetName).show();

		$('nav a').removeClass('active');
		$target.addClass('active');
	});
});
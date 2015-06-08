var sammy = new CatModel();

$(document).ready(function() {
	
	updateCat(sammy);

	sammy.on('change', updateCat);

	sammy.on('change:name', function(newModel) {
		console.log('the name was changed');
	});

	function updateCat(catModel) {
		$('#cat-image').attr('src', catModel.get('imageUrl'));
		$('#cat-name').html(catModel.get('name'));
	}

	$('#cat-model-form').on('submit', function(e) {
		console.log('submit happened');
		e.preventDefault();
		sammy.set({
			imageUrl: $('#cat-image-url').val(),
			name: $('#cat-name-input').val()
		});
	});



});
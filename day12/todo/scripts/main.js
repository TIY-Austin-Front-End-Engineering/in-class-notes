$(document).on('ready', start);
// document.querySelectorAll(document).addEventListener('ready', start)

function start(e) {

	var $inputBox = $('#todo-input');
	// var inputBox = document.querySelector('#todo-input');
	// var inputBox = document.getElementById('todo-input');

	var $todoButton = $('#add-todo-button');
	// var todoButton = document.querySelector('#add-todo-button');

	var $todoForm = $('#todo-form');
	var $list = $('#list');

	var list = [];


	$todoForm.on('submit', addTodo);
	
	// inputBox.addEventListener('click', onButtonClick);

	function addTodo(e) {
		e.preventDefault();
		list.push($inputBox.val());
		$inputBox.val('');
		var listHtml = render(list);
		$list.html(listHtml);
		// element.innerHTML = listHtml
	}

	function render(todoList) {
		return '<ul><li>'+todoList.join('</li><li>')+'</li></ul>';
	}

	// $inputBox.val('test');
	// console.log($inputBox.val());
	// $inputBox.val('');
	// inputBox.value = 'test';
	// console.log(inputBox.value)


	// console.log("I'm ready to start!");
}
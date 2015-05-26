$(document).on('ready', start);

function start(e) {

	var $inputBox = $('#todo-input');
	var $todoButton = $('#add-todo-button');
	var $todoForm = $('#todo-form');
	var $list = $('#list');

	var list = [];


	$todoForm.on('submit', addTodo);
	$list.on('click', toggleTodo);
	
	function addTodo(e) {
		e.preventDefault();
		var todoObj = {
			text: $inputBox.val(),
			finished: false
		};
		list.push(todoObj);
		$inputBox.val('');
		var listHtml = render(list);
		$list.html(listHtml);
	}

	function toggleTodo(e) {
		var id = e.target.id;
		list[id].finished = !list[id].finished;
		var listHtml = render(list);
		$list.html(listHtml);
	}

	function render(todoList) {
		console.log('render');
		console.log(todoList);
		var returnString = '<ul>';
		for(var i=0; i<todoList.length; i++) {
			var currentTodo = todoList[i];
			if(currentTodo.finished) {
				returnString += '<li style="text-decoration: line-through;" id="'+i+'">'+currentTodo.text+'</li>';
			}
			else {
				returnString += '<li id="'+i+'">'+currentTodo.text+'</li>';
			}
			
		}
		returnString += '</ul>';
		return returnString;
		// return '<ul><li>'+todoList.join('</li><li>')+'</li></ul>';
	}
}
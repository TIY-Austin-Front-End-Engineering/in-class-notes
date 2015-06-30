angular.module('basic.controllers', ['basic.services'])
.controller('BasicCtrl', function($scope, $rootScope, Test, $http, $window) {
	$scope.todoItems = [];

	$http.get('http://tiny-pizza-server.herokuapp.com/collections/angular-todo')
	.success(function(todoItems) {
		$scope.todoItems = todoItems;
	});

	$scope.addTodo = function(todo) {
		$scope.todo = '';
		var newTodo = {
			text: todo,
			finished: false
		};
		$scope.todoItems.push(newTodo);

		$http.post(
			'http://tiny-pizza-server.herokuapp.com/collections/angular-todo',
			newTodo
		)
		.success(function(result) {
			newTodo._id = result._id;
			console.log($scope.todoItems);
		})
		.error(function(err) {

		});
	};

	$scope.toggleFinished = function(todo) {
		todo.finished = !todo.finished;
		$http.put(
			'http://tiny-pizza-server.herokuapp.com/collections/angular-todo/'+todo._id,
			todo
		);

		$window.location = 'http://google.com';
	}
});
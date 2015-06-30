angular.module('basic.controllers', ['basic.services'])
.controller('BasicCtrl', function($scope, $rootScope, Test) {
	// $scope.tab = 1;
	// $scope.name = 'Aaron';
	// $scope.myModel = Test;
	$scope.todoItems = [];

	$scope.addTodo = function(todo) {
		$scope.todo = '';
		$scope.todoItems.push({
			text: todo,
			finished: false
		});
	};

	$scope.updateUsername = function(username) {
		$rootScope.username = username;
	};
})
.controller('names', function($scope) {
	$scope.name = 'Default';
});
angular.module('basic.controllers', ['basic.services'])
.controller('HomeCtrl', function() {
	
})
.controller('ResumeCtrl', function() {
	
})
.controller('BioCtrl', function() {
	
})
.controller('ProjectCtrl', function($scope, $stateParams) {
	$scope.projectName = $stateParams.name;
});
angular.module('basic', [
	'basic.controllers',
	'basic.services',
	'ui.router'
])
.run(function() {
	console.log('hello world');
	// Put code here that should get run right as the app boots up
})
.config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
    .state('home', {
        url: "/home",
        templateUrl: "templates/home.html",
        controller: "HomeCtrl"
    })
    .state('resume', {
        url: "/cv",
        templateUrl: "templates/resume.html",
        controller: "ResumeCtrl"
    })
    .state('bio', {
        url: "/bio",
        templateUrl: "templates/bio.html",
        controller: "BioCtrl"
    })
    .state('project', {
		url: "/project/:name",
		templateUrl: "templates/project.html",
		controller: "ProjectCtrl"
	});

    $urlRouterProvider.otherwise("/home");
});
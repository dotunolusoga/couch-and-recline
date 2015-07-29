angular
	.module('showcase')

	.config(showcaseConfig);

function showcaseConfig($routeProvider){
	$routeProvider
		.when('/', {
			templateUrl: 'scripts/grid.html',
			controller: 'ShowCaseController',
			controllerAs: 'grid'
		})
};

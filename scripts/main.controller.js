angular
	.module('showcase')

	.controller('ShowCaseController', ShowCaseController);


function ShowCaseController ($http) {
	var vm = this,
	BASE_URL = new Firebase('https://2com.firebaseio.com/');

	$http
		.get(BASE_URL + '/furniture.json')
		.success(function(data) {
			vm.furniture = data;
		})
};

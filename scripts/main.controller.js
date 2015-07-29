angular
	.module('showcase')

	.controller('ShowCaseController', ShowCaseController);


function ShowCaseController ($http, $rootScope) {
	var vm = this,
	BASE_URL = new Firebase('https://2com.firebaseio.com/');

	$http
		.get(BASE_URL + '/furniture.json')
		.success(function(data) {
			vm.furniture = data;
		});

	vm.getContact = function () {
		vm.newContact.contactName;
		vm.newContact.email;

		$http
			.post(BASE_URL + '/contacts.json',
			 {name: vm.newContact.contactName,
				email: vm.newContact.email})
			.success(function() {
					$location.path('/')
					clearForm();
				})
		}

		function clearForm () {
			contactForm.empty();
		}
};

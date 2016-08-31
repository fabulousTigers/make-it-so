angular.module('makeitso.home', [])

	.controller('homeController', function($scope, $http){
		
		$scope.data = [];

		$scope.getBounties = function(){
			console.log("getBounties() called!!!!")


			$http({
     			'method': 'GET',
     			'url': '/projects',
     			'Content-Type': 'application/json'
   			})
			.success(function(response){
				
				$scope.data = response;
				console.log("Success!!!! scope.data: ", $scope.data);


			}).error(function(error){
				console.log(error);

			})		
		}	

		$scope.contribute = function(username, amount, id){
			console.log('all vals', username, amount, id);
			// console.log('this is the id!', id);
		}

		


	})
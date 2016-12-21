var myApp= angular.module('myApp',[]);

myApp.controller('Mycontroller',function($scope,$http){


	$scope.userName='';
	$scope.allUser =[];
	$scope.userView ='name';
	$scope.userDetail= function(){
				var userLink = 'https://api.github.com/users/'+$scope.userName;
				$http.get(userLink).success(function(data){
					$scope.allUser.push(data);
					})
					$scope.userName='';			
				   	};
	$scope.deleteUser = function(item){
					console.log(item.currentTarget+"itemm");
					var loginId=item.currentTarget.getAttribute('data-login');
					for(var i=0; i<$scope.allUser.length; i++)
						{
							if($scope.allUser[i].login == loginId)
								{
									$scope.allUser.splice(i,1);
								}
						}



						}
	
	})
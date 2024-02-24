var app = angular.module('appXtura',[]);

app.controller('HomeCtrl', function($scope, $http, $rootScope){
    
    $scope.services = [];
    $scope.getServices = function(){
        $http({
            method : "GET",
            url : 'assets/archivo/servicios.json',
            headers:{
                'Content-Type': 'application/json'
            }
        }).then(function mySuccess(response) {    
            $scope.services= response.data.services;
        });
    }

    $scope.getServices();
});
'use strict';

// Declare app level module which depends on views, and components
var myApp = angular.module('myShoppingList', ['ngRoute',
  'ui.router',
  'ui.bootstrap',
  'ngMaterial',
  'ngMessages'
  ]).config(appRouter);

function appRouter($routeProvider, $locationProvider) {
    $routeProvider
            .when('/flightDetails/:params', {
                templateUrl: 'partials/main/main.html',
                controller: 'mainCtrl'
            })
            .otherwise({redirectTo: '/flightDetails'});
};

appRouter.$inject = ['$routeProvider','$locationProvider'];
angular.module('myShoppingList').controller('mainCtrl', ["$scope", "$rootScope", "$routeParams","dataService", "$timeout", function($scope,$rootScope,$routeParams,dataService,$timeout) {
       $rootScope.airlinesCode=$routeParams.params;
       $rootScope.cabin="Mint";
       if($routeParams.params!=null && $routeParams.params != undefined){
            if($routeParams.params.indexOf("_")!=-1){
                var allParams=$routeParams.params.split("_");
            }
            else{
                var allParams=$routeParams.params.split("&");
            }
            $rootScope.airlinesCode=allParams[0];
            $rootScope.cabin=allParams[1];
            //$routeParams.airlinesCode=allParams[0];
        }
        $("#header_logo").addClass($rootScope.airlinesCode);
        dataService.getFlightsJSON().then(function (jsonData) {
         console.log('inside getPollingJSON success....data is .....' +jsonData);  
          /*$scope.amenities = jsonData.data.amenities.split(",");
          $scope.totalAmenitiesObj=[];
          for(var i=0;i<$scope.amenities.length;i++){
            var img=$scope.amenities[i].split(' ').join("_");
            var obj={
                "amenity":$scope.amenities[i],
                "img":"assets/img/"+img+".png"
              };
            $scope.totalAmenitiesObj.push(obj);
          }*/
     });
}]);
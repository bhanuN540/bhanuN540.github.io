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
            $rootScope.flightNo="163";
            //$routeParams.airlinesCode=allParams[0];
        }
        $("#header_logo").addClass($rootScope.airlinesCode);
        dataService.getFlightsJSON().then(function (jsonData) {
         //console.log('inside getPollingJSON success....data is .....' +JSON.stringify(jsonData));  
          $scope.flightData = jsonData.data.AirShoppingRS[0].ResponseOffer;
          //console.log('inside getPollingJSON success....data is .....' +JSON.stringify($scope.flightData)); 
          for(var i=0;i<$scope.flightData.length;i++){
            if($scope.flightData[i].MarketingCarrierCode==$rootScope.airlinesCode){
              console.log("inside IF")
              $rootScope.selectedFlightInfo=$scope.flightData[i];
            }
          }
          if($rootScope.selectedFlightInfo==null && $rootScope.selectedFlightInfo==undefined){
            $rootScope.selectedFlightInfo=$scope.flightData[0];
          }
          console.log('slected flight data' +JSON.stringify($rootScope.selectedFlightInfo));
     });
}]);
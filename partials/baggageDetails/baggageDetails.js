angular.module('myShoppingList').controller('baggageDetails', ["$scope", "$rootScope", "dataService", "$timeout", function($scope,$rootScope,dataService,$timeout) {
       $scope.airlinesCode=$rootScope.airlinesCode;
}]);
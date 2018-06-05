angular.module('myShoppingList').controller('seatsView', ["$scope", "$rootScope", "dataService", "$timeout", function($scope,$rootScope,dataService,$timeout) {
       $scope.seatImg="assets/img/"+$rootScope.airlinesCode+"_"+$rootScope.cabin+".jpg"
}]);
angular.module('myShoppingList').controller('amenities', ["$scope", "$rootScope", "dataService", "$timeout", function($scope,$rootScope,dataService,$timeout) {
    dataService.getAmenitiesJSON().then(function (jsonData) {
       console.log('inside getPollingJSON success....data is .....' +jsonData);  
        $scope.amenities = jsonData.data.amenities.split(",");
        $scope.totalAmenitiesObj=[];
        for(var i=0;i<$scope.amenities.length;i++){
        	var img=$scope.amenities[i].split(' ').join("_");
        	var obj={
        			"amenity":$scope.amenities[i],
        			"img":"assets/img/"+img+".png"
        		};
        	$scope.totalAmenitiesObj.push(obj);
        }
   });
}])
angular.module("myShoppingList")
        .service('dataService', ["$http", "$q", function ($http, configService, $q) {
        this.pollingHeaders={
            headers:{
                "Content-Type": "application/json",
            }
        };
        this.getAmenitiesJSON = function (req, tel) {
            console.log('inside getPollingJSON');
            return $http.get('partials/services/amenities.json','',this.pollingHeaders);
        };
        this.getFlightsJSON = function (req, tel) {
            console.log('inside getPollingJSON');
            return $http.get('partials/services/FlightList.json','',this.pollingHeaders);
        };

}]);

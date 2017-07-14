angular
  .module("dontForget")
  .controller("homeController", function ($scope, $state, $http, homeService, tripService) {

    var currentDate = new Date().getDate();
    var currentDay = new Date().getDay();
    var currentTime = new Date().getHours();
    var nextDate = (currentDate + 1);
    console.log(nextDate);

    if (currentTime > 12 && currentTime < 17) {
      $scope.greeting = "Good Afternoon!";
    }
    else if (currentTime > 17) {
      $scope.greeting = "Good Evening!";

    } else {
      $scope.greeting = "Good Morning!";
    }
    var trips = tripService.getTrips();

    $scope.currentTrip = trips[0];
    $scope.nextDateTrips = [];

    for (var i = 1; i < trips.length; i++) {
      $scope.nextDateTrips.push(trips[i])
    }
  })

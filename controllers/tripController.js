angular
  .module("dontForget")
  .controller("tripController", function ($scope, $http, $state, $stateParams, tripService, userService) {

    if ($stateParams.id == undefined || $stateParams.id == null || $stateParams.id == "") {
      $scope.header = "Create";
      $scope.submitButton = true;
      tripService.getTripById($stateParams.id, function (response) {
        $scope.trip = response;
        console.log($scope.trip);
      })
    } else {
      $scope.header = "Update";
      $scope.submitButton = false;
      tripService.getTripById($stateParams.id, function (response) {
        $scope.trip = response;
        console.log($scope.trip);
      })
    }
    $scope.trips = tripService.getTrips();

    $scope.users = userService.getUsers();

    $scope.addTrip = function () {
      tripService.addTrip($scope.trip)
      $state.go("trip");
    }
    $scope.saveTrip = function () {
      tripService.updateTrip($scope.trip)
    }
    $scope.deleteTrip = function () {
      tripService.deleteTrip($stateParams.id)
    }
    $scope.isDropoff = function () {
      console.log($scope.trip.dropoff)
      if ($scope.trip.dropoff == true && driver != null) {

        $scope.trip.dropoffDriver = driver;
        console.log('this ran', $scope.trip)
      }
    }
    $scope.isPickup = function () {
      console.log($scope.trip.pickup)
      if ($scope.trip.pickup == true && driver != null) {
        $scope.trip.pickupDriver = driver;
        console.log('this ran', $scope.trip)
      }
    }
    var driver = null;
    $scope.setDriver = function () {
      for (var i = 0; i < $scope.users.length; i++) {
        if ($scope.driverId == $scope.users[i].id) {
          driver = $scope.users[i]
        }
      }
    }
  })

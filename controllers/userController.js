angular
  .module("dontForget")
  .controller("userController", function ($scope, $http, $state, $stateParams, userService) {

    if ($stateParams.id == undefined || $stateParams.id == null || $stateParams.id == "") {
      $scope.header = "Create";
      $scope.submitButton = true;
      userService.getUserById($stateParams.id, function (response) {
        $scope.user = response;
        console.log($scope.user);
      })
    } else {
      $scope.header = "Update";
      $scope.submitButton = false;
      userService.getUserById($stateParams.id, function (response) {
        $scope.user = response;
        console.log($scope.user);
      })
    }
    $scope.users = userService.getUsers();

    $scope.addUser = function () {
      userService.addUser($scope.user)
      $state.go("user");
    }

    $scope.saveUser = function () {
      userService.updateUser($scope.user)
    }
    $scope.deleteUser = function () {
      userService.deleteUser($stateParams.id)
    }

  })


//   $scope.firstName = ""
//   $scope.lastName = ""
//   $scope.childName = ""
//   $scope.email = ""
//   $scope.street = ""
//   $scope.city = ""
//   $scope.state = ""
//   $scope.zip = ""
//   $scope.cell = ""
// }

// var currentUserIndex = null;
// var currentUserId = null;
// $scope.submitButton = true;
// $scope.saveButton = false;

// $scope.updateUser = function (user) {
//   for (var i = 0; i < $scope.users.length; i++) {
//     if ($scope.users[i] == user) {

//       currentUserIndex = i
//       currentUserId = user.id

//       $scope.firstName = user.firstName;
//       $scope.lastName = user.lastName;
//       $scope.childName = childName;
//       $scope.email = user.email;
//       $scope.street = user.street;
//       $scope.city = user.city;
//       $scope.state = user.state;
//       $scope.zip = user.zip;
//       $scope.cell = user.cell;
//     }
//   }
//   $scope.userSubmitButton = false;
//   $scope.userSaveButton = true;
// }


    // $scope.deleteUser = function (user) {
    //   userService.deleteUser(user)
    // }
  // })
var app = angular.module("dontForget", ["ui.router"])

app.config(function ($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise("/");

  $stateProvider
    .state("home", {
      url: "/",
      templateUrl: "./views/home.html",
      controller: "homeController"
    })

    // USERS
    .state("user", {
      url: "/user",
      templateUrl: "./views/users.html",
      controller: "userController"
    })
        .state("newUser", {
          url: "/user/new",
          templateUrl: "./views/user-form.html",
          controller: "userController"
        })
        .state("showUser", {
          url: "/user/:id",
          templateUrl: "./views/user.html",
          controller: "userController"
        })
        .state("editUser", {
          url: "/user/:id/edit",
          templateUrl: "./views/user-form.html",
          controller: "userController"
        })

    // TRIPS
    .state("trip", {
      url: "/trip",
      templateUrl: "./views/trips.html",
      controller: "tripController"
    })
        .state("newTrip", {
          url: "/trip/new",
          templateUrl: "./views/trip-form.html",
          controller: "tripController"
        })
        .state("showTrip", {
          url: "/trip/:id",
          templateUrl: "./views/trip.html",
          controller: "tripController"
        })
        .state("editTrip", {
          url: "/trip/:id/edit",
          templateUrl: "./views/trip-form.html",
          controller: "tripController"
        })
})

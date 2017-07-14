angular
  .module("dontForget")
  .service("tripService", function ($http, $state) {

    var _trips = [];
    var tripId = 0;

    function Trip(id, name, date, time, street, city, state, zip, driver, dropoff, pickup, dropoffDriver, pickupDriver) {
      this.id = id;
      this.name = name;
      this.date = date;
      this.time = time;
      this.street = street;
      this.city = city;
      this.state = state;
      this.zip = zip;
      this.driver = driver;
      this.dropoff = dropoff;
      this.pickup = pickup;
      this.dropoffDriver = dropoffDriver
      this.pickupDriver = pickupDriver
    }

    _trips.push(new Trip(tripId++, "Julie's Party", new Date("7/12/2017"), "8-9:30PM", "5142 Argosy Ave", "Huntington Beach", "CA", "92649", "Brandon Davis", 'Natalia Lupanza', "Brandon Davis"));

    _trips.push(new Trip(tripId++, "Water Polo", new Date("7/13/2017"), "6-8 AM", "4320 E Olympic Plaza", "Long Beach", "CA", "90803", "Chris Parish", "Chris Parish", "Chris Parish"));

    _trips.push(new Trip(tripId++, "Basketball", new Date("7/13/2017"), "9-12 PM", "1250 N Bellflower Blvd", "Long Beach", "CA", "90840", "Henry Cameron", "Henry Cameron", "Brandon Davis"));

    _trips.push(new Trip(tripId++, "Emily's Playdate", new Date("7/13/2017"), "1-4 PM", "1050 Electric Ave", "Seal Beach", "CA", "90720", "Natalia Lupanza", "Natalia Lupanza", "Natalia Lupanza"));

    _trips.push(new Trip(tripId++, "Water Polo", new Date("7/14/2017"), "6-8 AM", "4320 E Olympic Plaza", "Long Beach", "CA", "90803", "Natalia Lupanza", "Natalia Lupanza", "Natalia Lupanza"));

    this.getTrips = function () {
      return _trips
    }
    this.getTripById = function (id, cb) {
      if (id == undefined || id == null || id == "") {
        var trip = {
          id: "",
          name: "",
          date: "",
          startTime: "",
          endTime: "",
          street: "",
          city: "",
          state: "",
          zip: "",
          driver: "",
          dropoff: "",
          pickup: "",
          dropoffDriver: "",
          pickupDriver: ""
        };
        cb(trip)
      }
      else {
        for (var i = 0; i < _trips.length; i++) {
          if (_trips[i].id == id) {
            cb(_trips[i]);
          }
        }
      }
    }

    this.addTrip = function (trip) {
      trip.id = tripId++;
      _trips.unshift(trip);
    }

    this.updateTrip = function (trip) {
      for (var i = 0; i < _trips.length; i++) {
        if (_trips[i].id == trip.id) {
          _trips.splice(i, 1, trip)
          $state.go("showTrip", { "id": trip.id })
        }
      }
    }

    this.deleteTrip = function (id) {
      for (var i = 0; i < _trips.length; i++) {
        if (_trips[i].id == id) {
          _trips.splice(i, 1);
          $state.go("trip");
        }
      }
    }
  })
angular
  .module("dontForget")
  .service("userService", function ($http, $state) {

    var userId = 0;
    var _users = [];

    function User(id, firstName, lastName, childName, email, street, city, state, zip, cell) {

      this.id = id;
      this.firstName = firstName;
      this.lastName = lastName;
      this.childName = childName;
      this.email = email;
      this.street = street;
      this.city = city;
      this.state = state;
      this.zip = zip;
      this.cell = cell;
    }

    _users.push(new User(userId++, "Natalia", "Lupanza", "Emily", "Lup.Nat@gmail.com", "1050 Electric Ave", "Seal Beach", "CA", "90740", "714-967-0763"))

    _users.push(new User(userId++, "Brandon", "Davis", "George", "Davis.b@gmail.com", "1893 Pelorus Ave", "Seal Beach", "CA", "90740", "949-348-2845"))

    _users.push(new User(userId++, "Henry", "Cameron", "Lilly", "Camhenry@gmail.com", "1716 Catalina Ave", "Seal Beach", "CA", "90740", "714-877-0845"))

    _users.push(new User(userId++, "Chris", "Parish", "Michael", "chriPa44@gmail.com", "2710 Copa De Oro Dr", "Seal Beach", "CA", "90720", "562-987-0723"))

    _users.push(new User(userId++, "Grant", "Garcia", "Casey", "gg1010@gmail.com", "2720 Copa De Oro Dr", "Seal Beach", "CA", "90740", "714-236-0993"))
    console.log(_users)

    this.getUsers = function () {
      return _users
    }
    this.getUserById = function (id, cb) {
      if (id == undefined || id == null || id == "") {
        var user = {
          id: "",
          firstName: "",
          lastName: "",
          childName: "",
          email: "",
          street: "",
          city: "",
          state: "",
          zip: "",
          cell: ""
        };
        cb(user)
      }
      else {
        for (var i = 0; i < _users.length; i++) {
          if (_users[i].id == id) {
            cb(_users[i]);
          }
        }
      }
    }

    this.addUser = function (user) {
      user.id = userId++;
      _users.unshift(user);

    }

    this.updateUser = function (user) {
      for (var i = 0; i < _users.length; i++) {
        if (_users[i].id == user.id) {
          _users.splice(i, 1, user)
          $state.go("showUser", { "id": user.id })
        }
      }
    }
    this.deleteUser = function (id) {
      for (var i = 0; i < _users.length; i++) {
        if (_users[i].id == id) {
          _users.splice(i, 1);
          $state.go("user");
        }
      }
    }
  })
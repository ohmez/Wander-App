var chai = require("chai");
var chaiHttp = require("chai-http");
var server = require("../server");
var db = require("../models");
var expect = chai.expect;

// Setting up the chai http plugin
chai.use(chaiHttp);

var request;

// Testing Customer Accounts Table
describe("GET /api/customer_accounts", function() {
  // Before each test begins, create a new request server for testing
  // & delete all examples from the db
  beforeEach(function() {
    request = chai.request(server);
    return db.sequelize.sync({ force: true });
  });

  it("should find all customer accounts", function(done) {
    // Add some examples to the db to test with
    db.customer_accounts
      .bulkCreate([
        {
          firstName: "Jamie",
          middleName: "V",
          lastName: "Marquez",
          birthday: "1976-05-06",
          phoneNumber: "386 - 253 - 8381",
          address: "1552 Franklin Avenue Daytona Beach, FL 32114",
          email: "JamieVMarquez@test.com",
          password: "123"
        },
        {
          firstName: "Darren",
          middleName: "T",
          lastName: "Zack",
          birthday: "1981-03-12",
          phoneNumber: "985 - 879 - 8968",
          address: "2169 Maryland Avenue Feather Sound, FL 34622",
          email: "DarrenTZack@test.com",
          password: "456"
        }
      ])
      .then(function() {
        // Request the route that returns all examples
        request.get("/api/customer_accounts").end(function(err, res) {
          var responseStatus = res.status;
          var responseBody = res.body;

          // Run assertions on the response

          expect(err).to.be.null;

          expect(responseStatus).to.equal(200);

          expect(responseBody)
            .to.be.an("array")
            .that.has.lengthOf(2);

          expect(responseBody[0])
            .to.be.an("object")
            .that.includes({
              firstName: "Jamie",
              middleName: "V",
              lastName: "Marquez",
              birthday: "1976-05-06",
              phoneNumber: "386 - 253 - 8381",
              address: "1552 Franklin Avenue Daytona Beach, FL 32114",
              email: "JamieVMarquez@test.com",
              password: "123"
            });

          expect(responseBody[1])
            .to.be.an("object")
            .that.includes({
              firstName: "Darren",
              middleName: "T",
              lastName: "Zack",
              birthday: "1981-03-12",
              phoneNumber: "985 - 879 - 8968",
              address: "2169 Maryland Avenue Feather Sound, FL 34622",
              email: "DarrenTZack@test.com",
              password: "456"
            });

          // The `done` function is used to end any asynchronous tests
          done();
        });
      });
  });
});

// Test Prebuilt packages Table
describe("GET /api/travel_packages", function() {
  // Before each test begins, create a new request server for testing
  // & delete all examples from the db
  beforeEach(function() {
    request = chai.request(server);
    return db.sequelize.sync({ force: true });
  });

  it("should find all of the pre-built packages", function(done) {
    // Add some examples to the db to test with
    db.travel_packages
      .bulkCreate([
        {
          category: "Thrifty",
          location: "Switzerland",
          flight: "First",
          dateLeaving: "2018-12-25",
          dateReturning: "2019-01-02",
          hotel: "ARIA Sky Suites",
          carRental: "Convertible",
          foodCredit: 100,
          activities: "Something Expensive"
        },
        {
          category: "Comfort",
          location: "Canada",
          flight: "Business",
          dateLeaving: "2019-01-18",
          dateReturning: "2019-01-23",
          hotel: "The Ritz-Carlton, Kapalua",
          carRental: "Mid-size",
          foodCredit: 50,
          activities: "Something Cool"
        }
      ])
      .then(function() {
        // Request the route that returns all examples
        request.get("/api/travel_packages").end(function(err, res) {
          var responseStatus = res.status;
          var responseBody = res.body;

          // Run assertions on the response

          expect(err).to.be.null;

          expect(responseStatus).to.equal(200);

          expect(responseBody)
            .to.be.an("array")
            .that.has.lengthOf(2);

          expect(responseBody[0])
            .to.be.an("object")
            .that.includes({
              category: "Thrifty",
              location: "Switzerland",
              flight: "First",
              dateLeaving: "2018-12-25",
              dateReturning: "2019-01-02",
              hotel: "ARIA Sky Suites",
              carRental: "Convertible",
              foodCredit: 100,
              activities: "Something Expensive"
            });

          expect(responseBody[1])
            .to.be.an("object")
            .that.includes({
              category: "Comfort",
              location: "Canada",
              flight: "Business",
              dateLeaving: "2019-01-18",
              dateReturning: "2019-01-23",
              hotel: "The Ritz-Carlton, Kapalua",
              carRental: "Mid-size",
              foodCredit: 50,
              activities: "Something Cool"
            });

          // The `done` function is used to end any asynchronous tests
          done();
        });
      });
  });
});

// Test Custom Packages Table
describe("GET /api/custom_packages", function() {
  // Before each test begins, create a new request server for testing
  // & delete all examples from the db
  beforeEach(function() {
    request = chai.request(server);
    return db.sequelize.sync({ force: true });
  });

  it("should find all of the pre-built packages", function(done) {
    // Add some examples to the db to test with
    db.custom_packages
      .bulkCreate([
        {
          location: "Switzerland",
          flight: "First",
          dateLeaving: "2018-12-25",
          dateReturning: "2019-01-02",
          hotel: "ARIA Sky Suites",
          carRental: "Convertible",
          foodCredit: 100,
          activities: "Something Expensive"
        },
        {
          location: "Canada",
          flight: "Business",
          dateLeaving: "2019-01-18",
          dateReturning: "2019-01-23",
          hotel: "The Ritz-Carlton, Kapalua",
          carRental: "Mid-size",
          foodCredit: 50,
          activities: "Something Cool"
        }
      ])
      .then(function() {
        // Request the route that returns all examples
        request.get("/api/custom_packages").end(function(err, res) {
          var responseStatus = res.status;
          var responseBody = res.body;

          // Run assertions on the response

          expect(err).to.be.null;

          expect(responseStatus).to.equal(200);

          expect(responseBody)
            .to.be.an("array")
            .that.has.lengthOf(2);

          expect(responseBody[0])
            .to.be.an("object")
            .that.includes({
              location: "Switzerland",
              flight: "First",
              dateLeaving: "2018-12-25",
              dateReturning: "2019-01-02",
              hotel: "ARIA Sky Suites",
              carRental: "Convertible",
              foodCredit: 100,
              activities: "Something Expensive"
            });

          expect(responseBody[1])
            .to.be.an("object")
            .that.includes({
              location: "Canada",
              flight: "Business",
              dateLeaving: "2019-01-18",
              dateReturning: "2019-01-23",
              hotel: "The Ritz-Carlton, Kapalua",
              carRental: "Mid-size",
              foodCredit: 50,
              activities: "Something Cool"
            });

          // The `done` function is used to end any asynchronous tests
          done();
        });
      });
  });
});

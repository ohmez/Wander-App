var chai = require("chai");
var chaiHttp = require("chai-http");
var server = require("../server");
var db = require("../models");
var expect = chai.expect;

// Setting up the chai http plugin
chai.use(chaiHttp);

var request;

// Testing whether can sign up to website
describe("POST /signup/test/create", function() {
  // Before each test begins, create a new request server for testing
  // & delete all examples from the db
  beforeEach(function() {
    request = chai.request(server);
    return db.sequelize.sync({ force: true });
  });

  it("should save a new customer", function(done) {
    // Create an object to send to the endpoint
    var reqBody = {
      firstName: "Jamie",
      middleName: "V",
      lastName: "Marquez",
      birthday: "1976-05-06",
      phoneNumber: "386-253-8381",
      address: "1552 Franklin Avenue Daytona Beach, FL 32114",
      email: "JamieVMarquez@test.com",
      password: "123"
    };

    // POST the request body to the server
    request
      .post("/signup/test/create")
      .send(reqBody)
      .end(function(err, res) {
        var responseStatus = res.status;
        var responseBody = res.body;

        // Run assertions on the response

        expect(err).to.be.null;

        expect(responseStatus).to.equal(200);

        expect(responseBody)
          .to.be.an("object")
          .that.includes(reqBody);

        // The `done` function is used to end any asynchronous tests
        done();
      });
  });
});

// Testing whether can create a customized package
describe("POST /booking/test/custom-package/create", function() {
  // Before each test begins, create a new request server for testing
  // & delete all examples from the db
  beforeEach(function() {
    request = chai.request(server);
    return db.sequelize.sync({ force: true });
  });
  it("create a customized package for user", function(done) {
    // Create an object to send to the endpoint
    var reqBody = {
      location: "United Kingdom",
      flight: "First",
      dateLeaving: "2019-02-15",
      dateReturning: "2019-02-20",
      hotel: "Hilton",
      carRental: "Convertible",
      foodCredit: 100,
      activities: "something expensive"
    };

    // POST the request body to the server
    request
      .post("/booking/test/custom-package/create")
      .send(reqBody)
      .end(function(err, res) {
        var responseStatus = res.status;
        var responseBody = res.body;
        // Run assertions on the response

        expect(err).to.be.null;

        expect(responseStatus).to.equal(200);

        expect(responseBody)
          .to.be.an("object")
          .that.includes(reqBody);

        // The `done` function is used to end any asynchronous tests
        done();
      });
  });
});

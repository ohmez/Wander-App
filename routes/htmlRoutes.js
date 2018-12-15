var db = require("../models");
var path = require("path");

module.exports = function(app) {
  // Load Home Page
  app.get("/", function(req, res) {
    res.render("home", {
      layout: "home",
      title: "Wander"
    });
  });
  // Load Prebuilt Packages Page
  app.get("/packages", function(req, res) {
    var id = 0;
    if(req.url.includes('?')) {
      id = req.url.split('?',2).splice(1,1)[0].split('=',2).splice(1,1)[0];
    }
    res.render("packages", {
      layout: "main",
      title: "Packages",
      userID: id
    });
  });
  // Load Custom Page Form Page
  app.get("/booking/custom-package", function(req, res) {
    res.render("custom-package", {
      layout: "main",
      title: "Custom Package"
    });
  });
  // Load Custom Page Form Page
  app.get("/sign-up/thank-you", function(req, res) {
    res.render("thankyou", {
      layout: "main",
      title: "Thank You"
    });
  });
  // Load Custom Page Form Page
  app.get("/restaurant-finder", function(req, res) {
    res.render("restaurant", {
      layout: "main",
      title: "Restaurant Finder"
    });
  });
  app.get("/booking", function(req, res) {
      db.travel_packages.findAll({}).then((results) => {
        var thrifty = {packages: [], name: 'thrifty'};
        var bliss = {packages: [],name: 'bliss'};
        var comfort = {packages: [],name: 'comfort'};
        for(x=0; x<results.length;x++) {
          if(results[x].dataValues.category === 'Thrifty') {
            thrifty.packages.push(results[x].dataValues);
          }
          if(results[x].dataValues.category === 'Bliss') {
            bliss.packages.push(results[x].dataValues);
          }
          if(results[x].dataValues.category === 'Comfort') {
            comfort.packages.push(results[x].dataValues);
          }
        } // end for loop
        var packages = {
          category: [thrifty, bliss, comfort],
          title: "Booking Options"
        };
        res.render("allbookings", packages);
      });
  });
  // Load Dynamic Packages Page - need a /:category in the url and update where statment.
  app.get("/booking/:category", function(req, res) {
    var id = 0;
    if(req.headers.referer.includes('?')) {
      id = req.headers.referer.split('?',2).splice(1,1)[0].split('=',2).splice(1,1)[0];
    }
    // test = test[0].split('=',2).splice(1,1);
    // console.log(test);
    db.travel_packages.findAll({
      where: {
      category: req.params.category
      }
  }).then((results) => {
      var packages = {
        package: results,
        title: "Booking Options",
        name: req.params.category,
        userID: id
      };
      res.render("bookings",packages);
    });
  });
  // Load Dynamic Packages Page - need a /:category in the url and update where statment.
  app.get("/customer-account/:id", function(req, res) {
    db.customer_accounts.findAll({
      where: {
        id: req.params.id
      }
  }).then((results) => {
      console.log("results: " +results)
      var customerAccountPage = {
        layout: "main",
        title: "Account Information",
        id: results
      }
      res.render("customer-account", customerAccountPage);
    });
  });
  // Load Account Sign Up Page
  app.get("/sign-up", function(req, res) {
    res.render("customer-signup", {
      layout: "main",
      title: "Sign Up"
    });
  });
  app.get("/login", function(req, res) {
    res.render("login", {
      layout: "main",
      title: "Welcome Back Wanderer"
    });
  });

  // Load example page and pass in an example by id
  app.get("/example/:id", function(req, res) {
    db.Example.findOne({ where: { id: req.params.id } }).then(function(
      dbExample
    ) {
      res.render("example", {
        example: dbExample
      });
    });
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};

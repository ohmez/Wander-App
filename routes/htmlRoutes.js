var db = require("../models");
var path = require("path");

module.exports = function(app) {
  // Load Index Page
  app.get("/", function(req, res) {
    res.render("index", {
      layout: "home",
      title: "Packages"
    });
  });
  // Load Prebuilt Packages Page
  app.get("/packages", function(req, res) {
    res.render("packages", {
      layout: "main",
      title: "Packages"
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
  app.get("/booking/thank-you", function(req, res) {
    res.render("thankyou", {
      layout: "main",
      title: "Thank You"
    });
  });
  // Load Individual Package Info Page
  app.get("/booking/thrifty-package", function(req, res) {
    res.render("thrifty-package", {
      layout: "main",
      title: "Thirfy"
    });
  });
  // Load Individual Package Info Page
  app.get("/booking/comfort-package", function(req, res) {
    res.render("comfort-package", {
      layout: "main",
      title: "Comfort"
    });
  });
  // Load Individual Package Info Page
  app.get("/booking/bliss-package", function(req, res) {
    res.render("bliss-package", {
      layout: "main",
      title: "Bliss"
    });
  });
  // Load Account Sign Up Page
  app.get("/signup", function(req, res) {
    res.render("customer-signup", {
      layout: "main",
      title: "Sign Up"
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

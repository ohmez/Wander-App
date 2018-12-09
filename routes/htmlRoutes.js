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
  app.get("/packages/custom-package", function(req, res) {
    res.render("custom-package", {
      layout: "main",
      title: "Custom Package"
    });
  });
  // Load Individual Package Info Page
  app.get("/booking", function(req, res) {
    res.sendFile(path.join(__dirname, "../html5up-spectral/booking.html"));
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

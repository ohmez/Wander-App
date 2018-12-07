var db = require("../models");
var path = require("path");
module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    // res.sendFile(path.join(__dirname, "../html5up-spectral/index.html"));
    res.render("index", {
      layout: "home"
    });
  });
  app.get("/packages", function(req, res) {
    // res.sendFile(path.join(__dirname, "../html5up-spectral/packages.html"));
    res.render("index", {
      layout: "main"
    });
  });
  app.get("/booking", function(req, res) {
    res.sendFile(path.join(__dirname, "../html5up-spectral/booking.html"));
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

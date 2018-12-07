var db = require("../models");

module.exports = function(app) {
  // Get all examples
  app.get("/api/customer_accounts", function(req, res) {
    db.customer_accounts.findAll({}).then(function(dbCustomer) {
      res.json(dbCustomer);
    });
  });

  // Get all examples
  app.get("/api/travel_packages", function(req, res) {
    db.travel_packages.findAll({}).then(function(dbPackages) {
      res.json(dbPackages);
    });
  });

  // Get all examples
  app.get("/api/custom_packages", function(req, res) {
    db.customPackages.findAll({}).then(function(dbCustom) {
      res.json(dbCustom);
    });
  });

  // Create a new example
  app.post("/api/examples", function(req, res) {
    db.Example.create(req.body).then(function(dbExample) {
      res.json(dbExample);
    });
  });

  // Delete an example by id
  app.delete("/api/examples/:id", function(req, res) {
    db.Example.destroy({ where: { id: req.params.id } }).then(function(
      dbExample
    ) {
      res.json(dbExample);
    });
  });
};

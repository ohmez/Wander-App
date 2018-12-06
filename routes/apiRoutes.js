var db = require("../models");

module.exports = function(app) {
  // Get all packages
  app.get("/api/packages", function(req, res) {
    db.Example.findAll({}).then(function(dbpackages) {
      res.json(dbpackages);
    });
  });
  app.get("/api/packages/:id", function(req, res) {
    db.Example.findById(req.params.id).then(function(dbpackages) {
      res.json(dbpackages);
    });
  });

  // Create a new example
  app.post("/api/packages", function(req, res) {
    db.Example.create(req.body).then(function(dbExample) {
      res.json(dbExample);
    });
  });

  // Delete an example by id
  app.delete("/api/packages/:id", function(req, res) {
    db.Example.destroy({ where: { id: req.params.id } }).then(function(dbExample) {
      res.json(dbExample);
    });
  });

  // start of customer api routes

  app.get("/api/customers", function(req, res) {
    db.Example.findAll({}).then(function(dbpackages) {
      res.json(dbpackages);
    });
  });
  app.get("/api/customers/:id", function(req, res) {
    db.Example.findById(req.params.id).then(function(dbpackages) {
      res.json(dbpackages);
    });
  });

  // Create a new example
  app.post("/api/customers", function(req, res) {
    db.Example.create(req.body).then(function(dbExample) {
      res.json(dbExample);
    });
  });

  // Delete an example by id
  app.delete("/api/customers/:id", function(req, res) {
    db.Example.destroy({ where: { id: req.params.id } }).then(function(dbExample) {
      res.json(dbExample);
    });
  });
};

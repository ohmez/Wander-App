var db = require("../models");

module.exports = function(app) {
  // Getting DB API info
  app.get("/api/customer_accounts", function(req, res) {
    db.customer_accounts.findAll({}).then(function(dbCustomer) {
      res.json(dbCustomer);
    });
  });
  app.get("/api/travel_packages", function(req, res) {
    db.travel_packages.findAll({}).then(function(dbPackages) {
      res.json(dbPackages);
    });
  });
  app.get("/api/custom_packages", function(req, res) {
    db.custom_packages.findAll({}).then(function(dbCustom) {
      res.json(dbCustom);
    });
  });
  // Getting API info for a selected customer
  app.get("/api/customers/:id", function(req, res) {
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

  app.post("/signup/create", function(req, res) {
    // console.log(res.body);
    db.customer_accounts
      .findAll({ where: { email: req.body.email } })
      .then(function(results) {
        // console.log(results);
        if (results.length === 0) {
          // create account
          db.customer_accounts.create(req.body).then(function(results) {
            // // console.log(results);
            // res.redirect("/packages");
            res.redirect("/../booking");
          });
        } else {
          res.redirect("/../login");
        }
      });
  });
  app.post("/login", (req,res) =>{
    db.customer_accounts.findAll({where: {email: req.body.email}})
    .then((results) => {
      if(results.length === 0) {
        res.redirect("/../login");
      } else {
        if(results[0].dataValues.password === req.body.password) {
          res.redirect("/../booking");
        }
      }
    })
  })
  app.post("/booking/custom-package/create", function(req, res) {
    db.custom_packages.create(req.body).then(function() {
      res.redirect("/sign-up");
    });
  });

  // For Testing using Mocha
  app.post("/signup/test/create", function(req, res) {
    // console.log(res.body);
    db.customer_accounts
      .findAll({ where: { email: req.body.email } })
      .then(function(results) {
        // console.log(results);
        if (results.length === 0) {
          // create account
          db.customer_accounts.create(req.body).then(function(results) {
            // console.log(results);
            res.json(results);
          });
        } else {
          res.redirect("*");
        }
      });
  });
  app.post("/booking/test/custom-package/create", function(req, res) {
    db.custom_packages.create(req.body).then(function(results) {
      res.json(results);
    });
  });

  // Delete an example by id
  app.delete("/api/packages/:id", function(req, res) {
    db.Example.destroy({ where: { id: req.params.id } }).then(function(
      dbExample
    ) {
      res.json(dbExample);
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
    db.Example.destroy({ where: { id: req.params.id } }).then(function(
      dbExample
    ) {
      res.json(dbExample);
    });
  });
};

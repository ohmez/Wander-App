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
  app.post("/signup/create", function(req, res) {
    // console.log(res.body);
    db.customer_accounts
      .findAll({ where: { email: req.body.email } })
      .then(function(results) {
        // console.log(results);
        if (results.length === 0) {
          // create account
          db.customer_accounts.create(req.body).then(function(results) {
            var id= results.dataValues.id;
            // res.redirect("/packages");
            res.redirect("/../packages?id="+id);
          });
        } else {
          res.redirect("/../login");
        }
      });
  });
  app.post("/login", (req,res) =>{
    // console.log(req);
    db.customer_accounts.findAll({where: {email: req.body.email}})
    .then((results) => {
      if(results.length === 0) {
        res.redirect("/../login");
      } else {
        if(results[0].dataValues.password === req.body.password) {
          var id = results[0].dataValues.id;
          res.redirect("/../packages?id="+id);
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
};

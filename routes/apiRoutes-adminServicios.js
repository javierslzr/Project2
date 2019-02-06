var db = require("../models");

module.exports = function(app) {
  // Get all examples
  app.get("/api/admin/servicios", function(req, res) {
    db.Servicios.findAll({}).then(function(dbServicios) {
      res.json(dbServicios);
    });
  });

  // Create a new example
  app.post("/api/admin/servicios", function(req, res) {
    db.Servicios.create(req.body).then(function(dbServicios) {
      res.json(dbServicios);
    });
  });

  //Update
  app.put("/api/admin/servicios", function(req, res) {
    db.Servicios.update({
      servicio: req.body.servicio,
      costo: req.body.costo
    }, {
      where: {
        id: req.body.id
      }
    }).then(function(dbServicio) {
      res.json(dbServicio);
    })
      .catch(function(err) {
      // Whenever a validation or flag fails, an error is thrown
      // We can "catch" the error to prevent it from being "thrown", which could crash our node app
        res.json(err);
      });
  });

  // Delete an example by id
  app.delete("/api/admin/servicios/:id", function(req, res) {
    db.Servicios.destroy({ where: { id: req.params.id } }).then(function(
      dbServicios
    ) {
      res.json(dbServicios);
    });
  });

};

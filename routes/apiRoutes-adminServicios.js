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

  // Delete an example by id
  app.delete("/api/admin/servicios/:id", function(req, res) {
    db.Servicios.destroy({ where: { id: req.params.id } }).then(function(
      dbServicios
    ) {
      res.json(dbServicios);
    });
  });

};

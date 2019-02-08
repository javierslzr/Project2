var db = require("../models");

module.exports = function(app) {
  // Get all examples
  app.get("/api/examples", function(req, res) {
    db.Example.findAll({}).then(function(dbExamples) {
      res.json(dbExamples);
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

  //GET ALL AVIALABLE SERVICES
  app.get("/api/usuario/servicios", function(req, res) {
    db.Servicios.findAll({}).then(function(dbServicios) {
      res.json(dbServicios);
    });
  });

  //GET ALL AVIALABLE locations
  app.get("/api/usuario/ubicaciones", function(req, res) {
    db.Ubicacion.findAll({}).then(function(Ubicacion) {
      res.json(Ubicacion);
    });
  });

  //GET CURRENT PEOPLE IN MAINTABLE
  app.get("/api/maintable", function(req, res) {
    db.mainTable.findAll({}).then(function(mainTable) {
      res.json(mainTable);
    });
  });



};

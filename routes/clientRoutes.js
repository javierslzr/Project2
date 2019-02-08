var db = require("../models");

module.exports = function (app) {

  // Load example page and pass in an example by id
  app.get("/usuarios/servicios", function (req, res) {
    db.Servicios.findAll({}).then(function (
      dbServicios
    ) {
      res.render("admin-servicios", {
        Servicios: dbServicios
      });
    });
  });

  app.get("/usuarios/ubicaciones", function (req, res) {
    db.Ubicacion.findAll({}).then(function (
        dbUbicacion
    ) {
      res.render("admin-servicios", {
        usuarios: dbUbicacion
      });
    });
  });

  // Render 404 page for any unmatched routes
  app.get("*", function (req, res) {
    res.render("404");
  });
};

var db = require("../models");

module.exports = function (app) {
  // Load index page
  app.get("/", function (req, res) {
    db.Usuarios.findAll({}).then(function (dbUsuarios) {
      res.render("index", {
        msg: "Welcome!",
        
      });
    });
  });

  // Load example page and pass in an example by id
  app.get("/admin/usuarios", function (req, res) {
    db.Usuarios.findAll({}).then(function (
      dbUsuarios
    ) {
      res.render("admin-usuarios", {
        Usuarios: dbUsuarios
      });
    });
  });

  app.get("/usuario/servicios", function(req, res) {
    db.Servicios.findAll({}).then(function(
    dbServicios
    ) {
      res.render("admin-servicios", {
        Servicios: dbServicios
      });
    });
  });

  app.get("/usuario/ubicaciones", function(req, res) {
    db.Ubicacion.findAll({}).then(function(
    dbUbicacion
    ) {
      res.render("admin-ubicaciones", {
        Ubicacion: dbUbicacion
      });
    });
  });


  // Render 404 page for any unmatched routes
  app.get("*", function (req, res) {
    res.render("404");
  });
};

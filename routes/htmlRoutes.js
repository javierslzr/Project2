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
      console.log(dbUsuarios);

      res.render("admin-usuarios", {
        datos: dbUsuarios
      });
    });
  });

  // Render 404 page for any unmatched routes
  app.get("*", function (req, res) {
    res.render("404");
  });
};

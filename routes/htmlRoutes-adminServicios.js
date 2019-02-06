var db = require("../models");

module.exports = function(app) {
  // Load example page and pass in an example by id
  app.get("/admin/servicios", function(req, res) {
    db.Servicios.findAll({}).then(function(
    dbServicios
    ) {
      res.render("admin-servicios", {
        servicios: dbServicios
      });
    });
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });

  app.put("/admin/servicios/:id", function(req, res) {
    db.Servicios.update(
      req.body,
      {
        where: {
          id: req.body.id
        }
      }).then(function(dbServicio) {
      res.json(dbServicio);
    });
  });

};

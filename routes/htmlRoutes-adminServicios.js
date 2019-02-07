var db = require("../models");

module.exports = function(app) {
  // Load admin-servicios page with all the service's list
  app.get("/admin/servicios", function(req, res) {
    db.Servicios.findAll({}).then(function(
    dbServicios
    ) {
      res.render("admin-servicios", {
        servicios: dbServicios
      });
    });
  });

  //Load the admin-usuarioAddDelServicio page
  app.get("/admin/AddDelServUser", function(req, res) {
    db.Servicios.findAll({}).then(function(
    dbServicios
    ) {
      res.render("admin-AddDelServUser", {
        servicios: dbServicios
      });
    });
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });


  // app.put("/admin/servicios/:id", function(req, res) {
  //   db.Servicios.update(
  //     req.body,
  //     {
  //       where: {
  //         id: req.body.id
  //       }
  //     }).then(function(dbServicio) {
  //     res.json(dbServicio);
  //   });
  // });

};

var db = require("../models");

module.exports = function (app) {
  // carga index
  app.get("/", function (req, res) {
    db.Usuarios.findAll({}).then(function (dbUsuarios) {
      res.render("index", {
        login: true,
      });
    });
  });

  // carga raiz usuarios
  app.get("/usuarios", function (req, res) {
    //funcion para agregar datos de usuario con servicios por vencer
    db.Usuarios.findAll({}).then(function (dbUsuarios) {
      res.render("usuario-main", {
        usuarios: true,
      });
    });
  });

  // carga raiz usuario-servicio
  app.get("/usuarios/servicios", function (req, res) {
    //funcion para agregar datos de usuarios con servicios vigentes y servicios disponibles
   db.Usuarios.findAll({}).then(function (dbUsuarios) {
     res.render("usuario-servicios", {
       admin: true,
     });
   });
 });

   // carga raiz admin
   app.get("/admin", function (req, res) {
     //funcion para agregar datos de usuarios con servicios por vencer
    db.Usuarios.findAll({}).then(function (dbUsuarios) {
      res.render("admin-main", {
        admin: true,
      });
    });
  });

  // carga raiz admin-usuarios
  app.get("/admin/usuarios", function (req, res) {
    //funcion para crear y editar usuarios
   db.Usuarios.findAll({}).then(function (dbUsuarios) {
     res.render("admin-usuarios", {
       admin: true,
     });
   });
 });

  // carga raiz admin-servicios
  app.get("/admin/usuarios", function (req, res) {
    //funcion para crear y editar servicios
   db.Usuarios.findAll({}).then(function (dbUsuarios) {
     res.render("admin-servicios", {
       admin: true,
     });
   });
 });


   














  // Load example page and pass in an example by id
  app.get("/admin/usuarios", function (req, res) {
    db.Usuarios.findAll({}).then(function (
      dbUsuarios
    ) {
      res.render("admin-usuarios", {
        usuarios: dbUsuarios
      });
    });
  });

  // Render 404 page for any unmatched routes
  app.get("*", function (req, res) {
    res.render("404");
  });
};

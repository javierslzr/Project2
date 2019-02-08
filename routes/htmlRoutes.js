var db = require("../models");
var moment = require("moment");

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
        datos: dbUsuarios
      });
    });
  });
  
  app.get("/usuario/servicios", function (req, res) {
    db.Servicios.findAll({}).then(function (
      dbServicios
    ) {
      res.render("admin-servicios", {
        Servicios: dbServicios,
      });
    });


  });

  app.get("/usuario/ubicaciones", function (req, res) {
    db.Ubicacion.findAll({}).then(function (
      dbUbicacion
    ) {
      res.render("admin-ubicaciones", {
        Ubicacion: dbUbicacion 
      });
    });
  });

  app.get("/admin/home", function (req, res) {
    db.mainTable.findAll({
      where: {
        fechaFinal: {
          $gte: moment().subtract(7, 'days').toDate()
        }
      }
    }).then(function (
      dbmainTable
    ) {
      console.log(dbmainTable);

      res.render("admin-home", {
        mainTable: dbmainTable
      });
    });
  });

  app.get("/usuario/servicios/:id", function(req, res) {
  db.mainTable.findAll({
    where:{
      id: req.params.id
    },
    include: [db.Servicios, db.Ubicacion, db.Usuarios]


  }).then(function(dbmainTable) {

    console.log(dbmainTable)
    res.render("admin-servicios", {
      mainTable: dbmainTable
    });
  });
  });


  // Render 404 page for any unmatched routes
  app.get("*", function (req, res) {
    res.render("404");
  });
};

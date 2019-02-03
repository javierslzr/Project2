var db = require("../models");

module.exports = function (app) {
    app.get("/api/admin/usuarios", function (req, res) {
        db.Usuarios.findAll({}).then(function (dbUsuarios) {
            res.json(dbUsuarios);
        });
    });

    // Get all examples
    app.post("/api/admin/usuarios", function (req, res) {
        db.Usuarios.create(req.body).then(function (dbUsuarios) {
            res.json(dbUsuarios);
        });
    });

};

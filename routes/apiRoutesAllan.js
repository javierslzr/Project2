var db = require("../models");

module.exports = function (app) {
    // Get all examples
    app.get("api/admin/usuarios", function (req, res) {
        db.Usuarios.findAll({}).then(function (dbUsuarios) {
            res.json(dbUsuarios);            
        });
    });


    // Create a new example
    app.post("/api/examples", function (req, res) {
        db.Example.create(req.body).then(function (dbExample) {
            res.json(dbExample);
        });
    });

    // Delete an example by id
    app.delete("/api/examples/:id", function (req, res) {
        db.Example.destroy({ where: { id: req.params.id } }).then(function (
            dbExample
        ) {
            res.json(dbExample);
        });
    });
};

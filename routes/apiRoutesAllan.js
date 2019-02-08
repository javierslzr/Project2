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


    app.put("/api/admin/usuarios", function (req, res) {
        db.Usuarios.update({
            name: req.body.name,
            correo: req.body.correo,
            telefono: req.body.telefono

        }, {
                where: {
                    id: req.body.id
                }
            }).then(function (dbUsuarios) {
                res.json(dbUsuarios)
            });
    });

    app.delete("/api/admin/usuarios", function (req, res) {
        db.Usuarios.destroy({
            where: {
                id: req.body.id
            }
        }).then(function (dbUsuarios) {
            res.json(dbUsuarios)
        });
    });

};

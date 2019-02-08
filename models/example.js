module.exports = function (sequelize, DataTypes) {
  var mainTable = sequelize.define("mainTable", {

    fechaInicio: {
      type: DataTypes.DATE,
      allowNull: false

    },
    fechaFinal: {
      type: DataTypes.DATE,
      allowNull: false

    }
  });

  mainTable.associate = function (models) {

    mainTable.belongsTo(models.Usuarios, {
      foreignKey: {
        allowNull: false
      }
    });

    mainTable.belongsTo(models.Servicios, {
      foreignKey: {
        allowNull: false
      }
    });

    mainTable.belongsTo(models.Ubicacion, {
      foreignKey: {
        allowNull: false
      }
    });
  };
  return mainTable;

};

module.exports = function(sequelize, DataTypes) {
  var mainTable = sequelize.define("mainTable", {
    idUsuario: DataTypes.INTEGER,
    idServicio: DataTypes.INTEGER,
    idUbicacion: DataTypes.INTEGER,
    fechaInicio: {
      type: DataTypes.DATE,
      allowNull: false
   
    },
    fechaFinal: {
      type: DataTypes.DATE,
      allowNull: false
     
    }
  });
  return mainTable;
};

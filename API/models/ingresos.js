module.exports = (sequelize, type) => {
    return sequelize.define("registro", {
      
      id: {
        type: type.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        timestamps: false,
      },
      idServicio: type.INTEGER,
      fecha: type.STRING,
      costo: type.INTEGER,
    });
  };
  
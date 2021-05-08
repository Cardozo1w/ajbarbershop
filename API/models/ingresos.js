module.exports = (sequelize, type) => {
    return sequelize.define("registro", {
      
      id: {
        type: type.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      idServicio: type.INTEGER,
      fecha: type.DATE,
      costo: type.INTEGER
    });
  };
  
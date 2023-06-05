const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define(
    "pokemon",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      image: {
        type: DataTypes.STRING,
      },
      life: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      stroke: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      defending: {
        type: DataTypes.INTEGER,
      },

    },
    {
      timestamps: false,
    }
  );
};

    // id:{
    //   primaryKey:true,
    //   type: DataTypes.INTEGER,
    //   allowNull:false,
    //   autoIncrement:true,
    // },
    // name: {
    //   type: DataTypes.STRING,
    //   allowNull: false,
    // },
    // image:{
    //   type:DataTypes.STRING,
    //   allowNull:false
    // },
    // life:{
    //   type:DataTypes.INTEGER,
    //   allowNull:false,
    // },
    // attack:{
    //   type:DataTypes.INTEGER,
    //   allowNull:false
    // },
    // defense:{
    //   type:DataTypes.INTEGER,
    //   allowNull:false



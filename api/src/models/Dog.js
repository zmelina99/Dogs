const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  const Dog = sequelize.define('dog', {
     id: {
      type: DataTypes.STRING, 
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    weight: {
      type: DataTypes.INTEGER,
      allowNull: false 
    },
    height: {
      type: DataTypes.INTEGER,
      allowNull: false 
    },
    life_span:{
      type: DataTypes.INTEGER 
    }

  }); 

};


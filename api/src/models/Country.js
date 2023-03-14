const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('country', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    name: {
      type: DataTypes.OBJECT,
      allowNull: false,
    },
    image: {
      type: DataTypes.ARRAY,
      allowNull: false,
    },
    continent: {
        type: DataTypes.ARRAY,
        allowNull: false,
    },
    capital: {
        type: DataTypes.ARRAY,
        allowNull: false,
    },
    subregion: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    area: {
        type: DataTypes.FLOAT,
        allowNull: true,
    },
    population: {
      type: DataTypes.INTEGER,
      allowNull: false,
    }
  });
};

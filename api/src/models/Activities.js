const {DataTypes} = require('sequelize');

module.exports = (sequelize) => {
    // Model definition
    sequelize.define('Activity', {
        id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true,
        },
        name:{
            type: DataTypes.STRING,
        },
        dificulty:{
            type: DataTypes.ENUM('1','2','3','4','5'),
        },
        duration:{
            type: DataTypes.STRING,
        },
        season:{
            type: DataTypes.ENUM('Summer', 'Autumn', 'winter', 'spring'),
        },
        },
        {timestamps: false})
};
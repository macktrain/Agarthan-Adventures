const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Class extends Model {}

Class.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    class_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    class_background: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  },
  {
   sequelize: sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'class',
  }
);

module.exports = Class;

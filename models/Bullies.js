const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Bullies extends Model {}

Bullies.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    bully_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    bully_background: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    impact_hide: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 50,
    },
    impact_run: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    impact_fight: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    impact_bribe: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'bullies',
  }
);

module.exports = Bullies;

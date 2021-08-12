const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Character extends Model {}

Character.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      allowNull: false,
      references: {
        model: 'user',
        key: 'id'
      },
    },
    character_name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    character_xrp: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 50,
    },
    class_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'class',
        key: 'id'
      },
    },
    race_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'race',
        key: 'id'
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'character',
  }
);

module.exports = Character;

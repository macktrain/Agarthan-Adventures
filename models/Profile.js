const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Profile extends Model {}

Profile.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    profile_name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    profile_health: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 50,
    },
    profile_attack: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    profile_defense: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    profile_class: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'class',
        key: 'id'
      },
    },
    profile_race: {
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
    modelName: 'profile',
  }
);

module.exports = Profile;

const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class Origin extends Model {}

Origin.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    origin_name: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'origin',
  }
);

module.exports = Origin;

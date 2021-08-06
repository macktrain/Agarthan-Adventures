// import models
const Bullies = require('./Bullies');
const Class = require('./Class');
const Race = require('./Race');
const Character = require('./Character');
const User = require('./User');

//In 1:1 relationships, hasOne and belongsTo go hand in hand
// User hasOne Character
User.hasOne(Character, {
  foreignKey: 'id',
  onDelete: 'CASCADE',
});

// Class is in many characters (1:1)
Character.belongsTo(User, {
  foreignKey: 'id',
});

//In M:1 or 1:M relationships belongsTo and hasMany go together
// Character belongsTo Class
Character.belongsTo(Class, {
  foreignKey: 'class_id',
});

// Class is in many characters
Class.hasMany(Character, {
  foreignKey: 'class_id',
});

// Character belongsTo Race  (1:1)
Character.belongsTo (Race, {
  foreignKey: 'race_id',
});

// Race is in many dharacters (1:M)
Race.hasMany(Character, {
  foreignKey: 'race_id',
});

module.exports = {
  Bullies,
  Class,
  Race,
  Character,
  User,
};

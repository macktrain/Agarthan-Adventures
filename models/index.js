// import models
const Class = require('./Class');
const Race = require('./Race');
const Profile = require('./Profile');

// Profile hasOne Class  (1:1)
Profile.hasOne(Class, {
  foreignKey: 'class_id',
});

// Class is in many profiles (1:M)
Class.hasMany(Profile, {
  foreignKey: 'class_id',
});

// Profile hasOne Race  (1:1)
Profile.hasOne(Race, {
  foreignKey: 'race_id',
});

// Race is in many profiles (1:M)
Race.hasMany(Profile, {
  foreignKey: 'race_id',
});

module.exports = {
  Class,
  Race,
  Profile,
};

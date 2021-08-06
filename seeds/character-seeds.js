const { Character } = require('../models');

const characterData = [
  {
    profile_name: 'Deathbringer',
    profile_health: 500,
    profile_attack: 500,
    profile_defense: 500,
    class_id: 1,
    race_id: 1,
  },
];

const seedCharacter = () => Character.bulkCreate(characterData);

module.exports = seedCharacter;

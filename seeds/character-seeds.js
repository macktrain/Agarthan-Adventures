const { Character } = require('../models');

const characterData = [
  {
    character_name: 'Deathbringer',
    character_health: 500,
    character_attack: 500,
    character_defense: 500,
    class_id: 1,
    race_id: 1,
  },
];

const seedCharacter = () => Character.bulkCreate(characterData);

module.exports = seedCharacter;

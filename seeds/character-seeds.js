const { Character } = require('../models');

const characterData = [
  {
    character_name: 'Deathbringer',
    character_xrp: 500,
    class_id: 1,
    race_id: 1,
  },
];

const seedCharacter = () => Character.bulkCreate(characterData);

module.exports = seedCharacter;

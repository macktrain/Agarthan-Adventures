const { Character } = require('../models');

const characterData = [
  {
    id : 1,
    character_name: 'Deathbringer',
    character_xrp: 1000,
    class_id: 1,
    race_id: 1,
  },
  {
    id : 2,
    character_name: 'Thorus',
    character_xrp: 900,
    class_id: 2,
    race_id: 4,
  },
];

const seedCharacter = () => Character.bulkCreate(characterData);

module.exports = seedCharacter;

const { Race } = require('../models');

const raceData = [
  {
    race_name: 'Human',
    rae_background: 'Commonfolk citizen of Agartha brought to this magical land during the first pilgrimage after the fall of The Outside City of the Sun God. Humble in nature and adaptable to many environments.  Mostly residing in the Besieged Farmlands.',
  },
  {
    race_name: 'Celestial',
    rae_background: 'Commonfolk citizen of Agartha brought to this magical land during the first pilgrimage after the fall of The Outside City of the Sun God. Humble in nature and adaptable to many environments.',
  },
  {
    race_name: 'Elfien',
    rae_background: 'Known to be the founders of this ancient realm, Elfien have a vast knowledge of the land\'s terrain and wildlife and have adept foraging skills. Primarily occupying the hillsides of the Blue Mountain.',
  },
  {
    race_name: 'Husk',
    rae_background: 'Known to be the founders of this ancient realm, Elfien have a vast knowledge of the land\'s terrain and wildlife and have adept foraging skills. Primarily occupying the hillsides of the Blue Mountain.',
  },
];

const seedRace = () => Tag.bulkCreate(raceData);

module.exports = seedRace;

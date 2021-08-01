const { Race } = require('../models');

const raceData = [
  {
    race_name: 'Human',
    race_background: 'Commonfolk citizen of Agartha brought to this magical land during the first pilgrimage after the fall of The Outside City of the Sun God. Humble in nature and adaptable to many environments.  Mostly residing in the Besieged Farmlands.',
  },
  {
    race_name: 'Celestial',
    race_background: 'Commonfolk citizen of Agartha brought to this magical land during the first pilgrimage after the fall of The Outside City of the Sun God. Humble in nature and adaptable to many environments.',
  },
  {
    race_name: 'Elfien',
    race_background: 'Known to be the founders of this ancient realm, Elfien have a vast knowledge of the land\'s terrain and wildlife and have adept foraging skills. Primarily occupying the hillsides of the Blue Mountain.',
  },
  {
    race_name: 'Husk',
    race_background: 'Known to be the founders of this ancient realm, Elfien have a vast knowledge of the land\'s terrain and wildlife and have adept foraging skills. Primarily occupying the hillsides of the Blue Mountain.',
  },
];

const seedRace = () => Race.bulkCreate(raceData);

module.exports = seedRace;

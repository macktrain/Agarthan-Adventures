const { Race } = require('../models');

const raceData = [
  {
    race_name: 'Human',
    race_background: 'Commonfolk citizen of Agartha brought to this magical land during the first pilgrimage after the fall of The Outside City of the Sun God. Humble in nature and adaptable to many environments.  Humans mostly reside in the Besieged Farmlands.',
  },
  {
    race_name: 'Celestial',
    race_background: 'Little is known about Celestial origin, their grey skin suggests they may have been born in the hollow earth but some believe may have come from somewhere...else; due to their enhanced cognition skills and understanding of tracking and inventiveness.',
  },
  {
    race_name: 'Elfien',
    race_background: 'Known to be the founders of this ancient realm, Elfien have a vast knowledge of the land\'s terrain and wildlife and have adept foraging skills. Primarily occupying the hillsides of the Blue Mountain',
  },
  {
    race_name: 'Husk',
    race_background: 'Thought to be born from the remains of dead and forgotten trees laid in ruin from the fires brought on from the Depths of Hell Eternal, this race possesses an ancient dark knowledge rooted in what firea lay below, able to call on the aid of darkness.',
  },
  {
    race_name: 'Nyah',
    race_background: 'A race born from Elfien descent, this people branched from those who endowed themselves to the teachings and practices of the animals around them. Harnessing magic to mimic the appearance and survival attributes of their kindred spirit guides.',
  },
];

const seedRace = () => Race.bulkCreate(raceData);

module.exports = seedRace;

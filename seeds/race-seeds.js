const { Race } = require('../models');

const raceData = [
  {
    race_name: 'rock music',
  },
  {
    race_name: 'pop music',
  },
  {
    race_name: 'blue',
  },
  {
    race_name: 'red',
  },
  {
    race_name: 'green',
  },
  {
    race_name: 'white',
  },
  {
    race_name: 'gold',
  },
  {
    race_name: 'pop culture',
  },
];

const seedTags = () => Tag.bulkCreate(raceData);

module.exports = seedTags;

const { Class } = require('../models');

const classData = [
  {
    class_name: 'Gunslinger',
  },
  {
    class_name: 'Heavy',
  },
  {
    class_name: 'Assassin',
  },
  {
    class_name: 'Paladin',
  },
  {
    class_name: 'JackofTrades',
  },
];

const seedClass = () => Class.bulkCreate(classData);

module.exports = seedClass;

const { Class } = require('../models');

const classData = [
  {
    class_name: 'Gunslinger',
    class_background: 'Slangin guns',
  },
  {
    class_name: 'Heavy',
    class_background: 'Large and in charge',
  },
  {
    class_name: 'Assassin',
    class_background: 'Once you see him, its too late',
  },
  {
    class_name: 'Paladin',
    class_background: 'The righteous live by truth',
  },
  {
    class_name: 'JackofTrades',
    class_background: 'I\'ll take a crack at anything.',
  },
];

const seedClass = () => Class.bulkCreate(classData);

module.exports = seedClass;

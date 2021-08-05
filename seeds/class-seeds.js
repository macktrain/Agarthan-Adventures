const { Class } = require('../models');

const classData = [
  {
    class_name: 'Gunslinger',
    class_background: 'Capable of great speed and dexterity, the Gunslinger is a force to be reckoned with at long-range and close-up encounters',
  },
  {
    class_name: 'Heavy',
    class_background: 'A congregation specializing in brute force. The Gybbar class is especially helpful in tight situations such as ambushes and battles against large mobs',
  },
  {
    class_name: 'Assassin',
    class_background: 'Raised in the shadows of Agartha\'s largest crime syndicate, these individuals typically work alone and leave a trail of corpes in their wake. Not much else is known about these drifters.',
  },
  {
    class_name: 'Paladin',
    class_background: 'Devote member of Agarthan\'s leading secular organization. Paladins are connected to the universald ivine and exceed in supporter roles and have an immense amount of skill in healing arts.',
  },
  {
    class_name: 'JackofTrades',
    class_background: 'I\'ll take a crack at anything.',
  },
];

const seedClass = () => Class.bulkCreate(classData);

module.exports = seedClass;

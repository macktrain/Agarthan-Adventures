const { Bullies } = require('../models');

const bullyData = [
    {
      bully_name: 'Mack Train',
      bully_background: 'Stealin\' all of your cookeis',
      impact_hide: 7,
      impact_run: 3,
      impact_fight: 10,
      impact_bribe: 9,
    },
    {
      bully_name: 'Cold Stone Cody',
      bully_background: 'Chillin',
      impact_hide: 9,
      impact_run: 10,
      impact_fight: 5,
      impact_bribe: 7,
    },
    {
      bully_name: 'Jared Yo Mama',
      bully_background: 'Stealin\' all of your cookeis',
      impact_hide: 7,
      impact_run: 5,
      impact_fight: 10,
      impact_bribe: 9,
    },
    {
      bully_name: 'Rock Hard',
      bully_background: 'Stealin\' all of your cookeis',
      impact_hide: 7,
      impact_run: 5,
      impact_fight: 10,
      impact_bribe: 9,
    },
    {
      bully_name: 'Atom Ickyoface',
      bully_background: 'I ain\'t no ant!',
      impact_hide: -7,
      impact_run: 100,
      impact_fight: 10,
      impact_bribe: 9,
    },
    {
      bully_name: 'Manny XRP Bandit',
      bully_background: 'Stealin\' all of your cookeis',
      impact_hide: 9,
      impact_run: 7,
      impact_fight: 10,
      impact_bribe: 3,
    },
];

const seedBullies = () => Bullies.bulkCreate(bullyData);

module.exports = seedBullies;

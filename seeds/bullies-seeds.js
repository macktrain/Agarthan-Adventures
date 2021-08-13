const { Bullies } = require('../models');

const bullyData = [
    {
      bully_name: 'Mack Train',
      bully_background: 'Stealin\' all of your cookeis',
      battle_text: 'LEE A dark mysterious figure approaches, fiddling with what appears to be small shreds of a banana peel and muttering weird nursery rhymes to himself. His gaze leaves the floor and meets yours, and taunts your feeble attempts to traverse these dungeons.',
      impact_hide: 7,
      impact_run: 3,
      impact_fight: 10,
      impact_bribe: 9,
    },
    {
      bully_name: 'Cold Stone Cody',
      bully_background: 'Chillin',
      battle_text: 'CODY A dark mysterious figure approaches, fiddling with what appears to be small shreds of a banana peel and muttering weird nursery rhymes to himself. His gaze leaves the floor and meets yours, and taunts your feeble attempts to traverse these dungeons.',
      
      impact_hide: 9,
      impact_run: 10,
      impact_fight: 5,
      impact_bribe: 7,
    },
    {
      bully_name: 'Jared Yo Mama',
      bully_background: 'Stealin\' all of your cookeis',
      battle_text: 'JARED A dark mysterious figure approaches, fiddling with what appears to be small shreds of a banana peel and muttering weird nursery rhymes to himself. His gaze leaves the floor and meets yours, and taunts your feeble attempts to traverse these dungeons.',
      impact_hide: 7,
      impact_run: 5,
      impact_fight: 10,
      impact_bribe: 9,
    },
    {
      bully_name: 'Rock Hard',
      bully_background: 'Stealin\' all of your cookeis',
      battle_text: 'ROCK A dark mysterious figure approaches, fiddling with what appears to be small shreds of a banana peel and muttering weird nursery rhymes to himself. His gaze leaves the floor and meets yours, and taunts your feeble attempts to traverse these dungeons.',
       impact_hide: 7,
      impact_run: 5,
      impact_fight: 10,
      impact_bribe: 9,
    },
    {
      bully_name: 'Atom Ickyoface',
      bully_background: 'I ain\'t no ant!',
      battle_text: 'ATOM A dark mysterious figure approaches, fiddling with what appears to be small shreds of a banana peel and muttering weird nursery rhymes to himself. His gaze leaves the floor and meets yours, and taunts your feeble attempts to traverse these dungeons.',
      impact_hide: -7,
      impact_run: 100,
      impact_fight: 10,
      impact_bribe: 9,
    },
    {
      bully_name: 'Manny XRP Bandit',
      bully_background: 'Stealin\' all of your cookeis',
      battle_text: 'MANNY A dark mysterious figure approaches, fiddling with what appears to be small shreds of a banana peel and muttering weird nursery rhymes to himself. His gaze leaves the floor and meets yours, and taunts your feeble attempts to traverse these dungeons.',
      impact_hide: 9,
      impact_run: 7,
      impact_fight: 10,
      impact_bribe: 3,
    },
];

const seedBullies = () => Bullies.bulkCreate(bullyData);

module.exports = seedBullies;

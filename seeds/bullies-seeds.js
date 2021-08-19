const { Bullies } = require('../models');

const bullyData = [
    {
      bully_name: 'Mack Train',
      bully_background: 'Stealin\' all of your cookeis',
<<<<<<< HEAD
      impact_hide: -5,
      impact_run: -5,
      impact_fight: -10,
      impact_bribe: -20,
=======
      battle_text: 'As you move through the forest you find a clearing, upon reaching it you come face to face with a lumbering brutish creature. The creature reacts but is not very quick, and swings at you, you manage to evade the attack but only just.',
      impact_hide: 7,
      impact_run: 3,
      impact_fight: 10,
      impact_bribe: 9,
>>>>>>> 4566afa52f2873a62a3b6091436e3e04b828de8a
    },
    {
      bully_name: 'Cold Stone Cody',
      bully_background: 'Chillin',
      battle_text: 'You enter a colossal underground cavern, with light only leaking through the giant entrance. As you move towards the door on the other side the ground begins to tremble beneath you. A gargantuan tortoise rises from the ground, levitating in front of you.',
      
      impact_hide: 9,
      impact_run: 10,
      impact_fight: 5,
      impact_bribe: 7,
    },
    {
      bully_name: 'Jared Yo Mama',
      bully_background: 'Stealin\' all of your cookeis',
      battle_text: 'A dark mysterious figure approaches, fiddling with what appears to be small shreds of a banana peel and muttering weird nursery rhymes to himself. His gaze leaves the floor and meets yours, and taunts your feeble attempts to traverse these dungeons.',
      impact_hide: 7,
      impact_run: 5,
      impact_fight: 10,
      impact_bribe: 9,
    },
    {
      bully_name: 'Rock Hard',
      bully_background: 'Stealin\' all of your cookeis',
      battle_text: 'You enter a large laboratory and hear the sound of bubbling mixtures and glass clinking. As you round a large cabinet with macabre displays of jar-encased monstrosities you see a small creature completely enthrawled in his concoctions.',
       impact_hide: 7,
      impact_run: 5,
      impact_fight: 10,
      impact_bribe: 9,
    },
    {
      bully_name: 'Atom Ickyoface',
      bully_background: 'I ain\'t no ant!',
      battle_text: 'You hear a metallic screaching off in the distance and as you approach it suddenly stops. A raspy high-pitched voice appears behind you "Hello there." The figure jumps over you with deadly grace, and looks up at you, "Dont be hasty, you are so close now."',
      impact_hide: -7,
      impact_run: 100,
      impact_fight: 10,
      impact_bribe: 9,
    },
    {
      bully_name: 'Manny XRP Bandit',
      bully_background: 'Stealin\' all of your cookeis',
      battle_text: 'You find yourself at a large metal door with heat eminating from inside. As you open the door a deafening roar fills the room, you reluctantly push forward and find yourself looking upon the legendary dragon. "How hard have you worked just to fail here?"',
      impact_hide: 9,
      impact_run: 7,
      impact_fight: 10,
      impact_bribe: 3,
    },
];

const seedBullies = () => Bullies.bulkCreate(bullyData);

module.exports = seedBullies;

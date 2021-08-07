
const seedBullies = require('./bullies-seeds');
const seedClass = require('./class-seeds');
const seedRace = require('./race-seeds');
const seedUser = require('./user-seeds');
const seedCharacter = require('./character-seeds');

const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');
  
  await seedBullies();
  console.log('\n----- BULLIES SEEDED -----\n');

  await seedClass();
  console.log('\n----- CLASS SEEDED -----\n');

  await seedRace();
  console.log('\n----- RACE SEEDED -----\n');
  
  await seedUser();
  console.log('\n----- USER SEEDED -----\n');
  
  await seedCharacter();
  console.log('\n----- CHARACTER SEEDED -----\n');

  process.exit(0);
};

seedAll();

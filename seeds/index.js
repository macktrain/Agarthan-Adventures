const seedClass = require('./class-seeds');
const seedProfile = require('./profile-seeds');
const seedRace = require('./race-seeds');

const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');
  await seedClass();
  console.log('\n----- CLASS SEEDED -----\n');

  await seedRace();
  console.log('\n----- RACE SEEDED -----\n');
  
  //MUST run profile last because of foreign key constraints
  await seedProfile();
  console.log('\n----- PROFILE SEEDED -----\n');

  process.exit(0);
};

seedAll();

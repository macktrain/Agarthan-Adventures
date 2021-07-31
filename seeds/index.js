const seedClass = require('./class-seeds');
const seedProfile = require('./profile-seeds');
const seedRace = require('./race-seeds');

const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');
  await seedClass();
  console.log('\n----- CLASS SEEDED -----\n');

  await seedProfile();
  console.log('\n----- PROFILE SEEDED -----\n');

  await seedRaces();
  console.log('\n----- RACE SEEDED -----\n');

  process.exit(0);
};

seedAll();

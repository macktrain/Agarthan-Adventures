const { Profile } = require('../models');

const profileData = [
  {
    profile_name: 'Deathbringer',
    profile_health: 500,
    profile_attack: 500,
    profile_defense: 500,
    profile_class: 1,
    profile_race: 1,
  },
];

const seedProfile = () => Profile.bulkCreate(profileData);

module.exports = seedProfile;

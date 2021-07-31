const { Profile } = require('../models');

const profileData = [
  {
    profile_id: 1,
    tag_id: 6,
  },
  {
    profile_id: 1,
    tag_id: 7,
  },
  {
    profile_id: 1,
    tag_id: 8,
  },
  {
    profile_id: 2,
    tag_id: 6,
  },
  {
    profile_id: 3,
    tag_id: 1,
  },
  {
    profile_id: 3,
    tag_id: 3,
  },
  {
    profile_id: 3,
    tag_id: 4,
  },
  {
    profile_id: 3,
    tag_id: 5,
  },
  {
    profile_id: 4,
    tag_id: 1,
  },
  {
    profile_id: 4,
    tag_id: 2,
  },
  {
    profile_id: 4,
    tag_id: 8,
  },
  {
    profile_id: 5,
    tag_id: 3,
  },
];

const seedProfile = () => Profile.bulkCreate(profileData);

module.exports = seedProfile;

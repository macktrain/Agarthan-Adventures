const { User } = require('../models');

const profileData = [
  {
    email: 'leemacklin@yahoo.com',
    password: 'pwd',
  },
  {
    email: 'daltonrothrock8@gmail.com',
    password: 'pwd',
  },
  {
    email: 'jared.minaga@gmail.com',
    password: 'pwd',
  },
  {
    email: 'atommielcarek@gmail.com',
    password: 'pwd',
  },
  {
    email: 'cj2898@outlook.com',
    password: 'pwd',
  },
];

const seedProfile = () => User.bulkCreate(profileData);

module.exports = seedProfile;

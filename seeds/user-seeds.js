const { User } = require('../models');

const profileData = [
  {
    user_fname: 'Lee',
    user_lname: 'Macklin',
    username: 'mack',
    email: 'l@m.com',
    password: 'pwd',
  },
  {
    user_fname: 'Dalton',
    user_lname: 'Rothrock',
    username: 'dTrain',
    email: 'd@r.com',
    password: 'pwd',
  },
  {
    user_fname: 'Jared',
    user_lname: 'Minaga',
    username: 'jRock',
    email: 'j@m.com',
    password: 'pwd',
  },
  {
    user_fname: 'Adam',
    user_lname: 'Mielcarek',
    username: 'Atom',
    email: 'a@m.com',
    password: 'pwd',
  },
  {
    user_fname: 'Cody',
    user_lname: 'C',
    username: 'Coolio',
    email: 'c@c.com',
    password: 'pwd',
  },
];

const seedProfile = () => User.bulkCreate(profileData);

module.exports = seedProfile;

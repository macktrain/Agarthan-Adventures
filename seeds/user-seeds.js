const { User } = require('../models');
const bcrypt = require('bcrypt');
require('dotenv').config();

const seededPwd = bcrypt.hashSync(process.env.SEED_PASSWORD, 10);

const userData = [
  {
    email: 'leemacklin@yahoo.com',
    password: seededPwd,
  },
  {
    email: 'daltonrothrock8@gmail.com',
    password: seededPwd,
  },
  {
    email: 'jared.minaga@gmail.com',
    password: seededPwd,
  },
  {
    email: 'atommielcarek@gmail.com',
    password: seededPwd,
  },
  {
    email: 'cj2898@outlook.com',
    password: seededPwd,
  },
];

const seedUser = () => User.bulkCreate(userData);

module.exports = seedUser;

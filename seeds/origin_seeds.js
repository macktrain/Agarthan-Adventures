const { Origin } = require('../models');

const originData = [
  {
    origin_name: 'Plain T-Shirt',
  },
  {
    origin_name: 'Plain T-Shirt',
  },
  {
    origin_name: 'Plain T-Shirt',
  },
  {
    origin_name: 'Plain T-Shirt',
  },
  {
    origin_name: 'Plain T-Shirt',
  },
];

const seedOrigin = () => Origin.bulkCreate(originData);

module.exports = seedOrigin;

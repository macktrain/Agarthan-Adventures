const Sequelize = require('sequelize');
require('dotenv').config();

/* Creates Sequelize Instance and pass connection parameters directly to Sequelize Constructor
   This mimics checking for a production env.  If not, then we go to localhost env            */
const sequelize = process.env.JAWSDB_URL
  ? new Sequelize(process.env.JAWSDB_URL)
  : new Sequelize(
    process.env.DB_NAME, 
    process.env.DB_USER, 
    process.env.DB_PASSWORD,
    {
      //Will run locally until moved to heroku
      host: 'localhost',
      //Dialect could be, if set up: mariadb, postgres, mssql, sqlite
      dialect: 'mysql',
      dialectOptions: 
      {
        decimalNumbers: true,
      },
    });

module.exports = sequelize;

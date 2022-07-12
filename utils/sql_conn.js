const pgp = require('pg-promise')();

//We have to set SSL usage to true for heroku to accept our connection
pgp.pg.defaults.ssl = true;

//create connection to heroku DB
const db = pgp(process.env.DATABASE_URL);

if(!db){
    console.log("DATABASE_URL not set correctly")
    process.exit(1);
}

module.exports = db;
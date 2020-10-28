require('dotenv').config();
const DB_CONFIG = process.env.DB_CONFIG || 'postgresql://myapp:mypass@mydbservice:5432/mydb';
const { Pool } = require('pg');

const pgconn = new Pool({
    connectionString: DB_CONFIG,
    ssl: false,
});
  
module.exports = { pgconn }
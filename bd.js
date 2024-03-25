const mysql = require('mysql2');

const dbConfig = {
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'crudjs',
};

const pool = mysql.createPool(dbConfig).promise();

module.exports = pool;

const { Client } = require('pg');
require('dotenv').config()
const client = new Client({
  connectionString: process.env.URI_DB,
  ssl: {
    rejectUnauthorized: false
  }
});
client.connect()
  .then(() => {
    console.log('Connected to PostgreSQL database');
  })
  .catch((err) => {
    console.error('Error connecting to PostgreSQL database', err);
});

client.query('SELECT name FROM public.testt;', (err, res) => {
  if (err) throw err;
  for (let row of res.rows) {
    console.log(JSON.stringify(row));
  }
  client.end();
});
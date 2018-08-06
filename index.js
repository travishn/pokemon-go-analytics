const express = require('express');
const bodyParser = require('body-parser');
const pg = require('pg');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const PORT = process.env.PORT || 5000;
// const connectionString = process.env.DATABASE_URL || 'postgres://localhost:5432/pogo_analytics';
// const client = new pg.Client(connectionString);
const config = {
  host: 'localhost',
  port: 5432,
  database: 'pogo_analytics',
};

const pool = new pg.Pool(config);

app.get('/', (req, res) => {
  res.send({ express: 'Hello from Express!' });
});

app.get('/pokemon', async (req, res) => {
  const response = await pool.query('SELECT * FROM pokemon');
  res.send(response.rows);
});

app.listen(PORT, () => {
  console.log(`Currently listening on port ${PORT}`);
});

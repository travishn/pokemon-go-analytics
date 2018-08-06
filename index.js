require('dotenv').config();
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
  host: process.env.HOST,
  port: process.env.DBPORT,
  database: process.env.DB,
};

const pool = new pg.Pool(config);

app.get('/', (req, res) => {
  res.send({
    express: 'Hello from Express!',
    allPokemon: '/pokemon',
    pokemonById: '/pokemon/:pokemonId',
    pokemonByGen: './pokemon/generation/:generationId',
  });
});

app.get('/pokemon', async (req, res) => {
  try {
    const response = await pool.query('SELECT * FROM pokemon');
    res.send(response.rows);
  } catch (err) {
    console.log(err);
    res.send({ error: 'Incorrect route. Please try again.' });
  }
});

app.get('/pokemon/:pokemonId', async (req, res) => {
  try {
    const pokeId = req.params.pokemonId;
    const response = await pool.query(`SELECT * FROM pokemon WHERE pokemon.id = ${pokeId}`);
    res.send(response.rows[0]);
  } catch (err) {
    console.log(err);
    res.send({ error: 'Incorrect route. Please try again.' });
  }
});

app.get('/pokemon/generation/:generationId', async (req, res) => {
  const gen = req.params.generationId;
  try {
    const response = await pool.query(`SELECT * FROM pokemon WHERE pokemon.generation = ${gen}`);
    res.send(response.rows);
  } catch (err) {
    console.log(err);
    res.send({ error: 'Incorrect route. Please try again.' });
  }
});

app.get('/pokemon/type/:element', async (req, res) => {
  const type = req.params.element;
  try {
    const response = await pool.query(
      `SELECT * 
      FROM pokemon 
      WHERE pokemon.type1 = ${type}`
    );
    res.send(response.rows);
  } catch (err) {
    console.log(err);
    res.send({ error: 'Incorrect route. Please try again.' });
  }
});

app.listen(PORT, () => {
  console.log(`Currently listening on port ${PORT}`);
});

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
  const response = await pool.query('SELECT * FROM pokemon');
  res.send(response.rows);
});

app.get('/pokemon/:pokemonId', async (req, res) => {
  const pokeId = req.params.pokemonId;
  const response = await pool.query(`SELECT * FROM pokemon WHERE pokemon.id = ${pokeId}`);
  res.send(response.rows);
});

app.get('/pokemon/generation/:generationId', async (req, res) => {
  const gen = req.params.generationId;
  const response = await pool.query(`SELECT * FROM pokemon WHERE pokemon.generation = ${gen}`);
  res.send(response.rows);
});

app.get('/pokemon/type/:typeElement', async (req, res) => {
  const type = req.params.typeElement;
  const response = await pool.query(
    `SELECT * 
    FROM pokemon 
    WHERE pokemon.type1 = ${type}
    OR pokemon.type2 = ${type}`
  );
  res.send(response.rows);
});

app.listen(PORT, () => {
  console.log(`Currently listening on port ${PORT}`);
});

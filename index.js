const express = require('express');
const bodyParser = require('body-parser');
const pg = require('pg');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const PORT = process.env.PORT || 5000;
const connectionStr = process.env.DATABASE_URL || 'postgres://localhost:5432/pogo_analytics';
const client = new pg.Client(connectionStr);

app.get('/', (req, res) => {
  res.send({ express: 'Hello from Express!' });
});

app.listen(PORT, () => {
  console.log(`Currently listening on port ${PORT}`);
});

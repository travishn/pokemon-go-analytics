const express = require('express');
const bodyParser = require('body-parser');
const pg = require('pg');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => {
  res.send({ express: 'Hello from Express!' });
});

app.listen(PORT, () => {
  console.log(`Currently listening on port ${PORT}`);
});

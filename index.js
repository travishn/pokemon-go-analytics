require('newrelic');
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 5000;
const pokeRoutes = require('./routes/pokemon');
const staticRoutes = require('./routes/static');

app.use('/api/v1', pokeRoutes);
app.use('/', staticRoutes);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

app.listen(PORT, () => {
  console.log(`Currently listening on port ${PORT}`);
});

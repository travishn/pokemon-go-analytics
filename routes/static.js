const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  res.send('Visit the /api/v1 route for our API routes! A home page is in the works :)');
});

module.exports = router;

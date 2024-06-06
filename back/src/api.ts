const express = require('express');

const app = express.Router();

app.get('/random-config', (req, res) => {
  res.json({ samples: 12, multiplicationFactor: 123.45 });
});

module.exports = app;

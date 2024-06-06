import express from 'express';

const app = express.Router();

app.get('/random-config', (req, res) => {
  res.json({ samples: 12, multiplicationFactor: 123.45 });
});

export default app;

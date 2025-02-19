import express from 'express';
import { random } from './utils';
import { Config } from './interfaces/Config';

const app = express.Router();

app.get('/random-config', (req, res) => {
  const config: Config = {
    samples: random(0, 500),
    multiplicationFactor: random(0, 100, 2),
  };
  res.json(config);
});

export default app;

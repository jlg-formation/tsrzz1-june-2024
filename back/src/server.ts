console.log('About to start a web server...');

import express, { Request, RequestHandler } from 'express';
import serveIndex from 'serve-index';
import api from './api';
import { Response } from 'express';
import { NextFunction } from 'express';

const app = express();
const port = 3000;

const log = (req: Request, res: Response, next: NextFunction) => {
  console.log('req: ', req.method, req.url);
  next();
};

app.use(log);

app.use('/api', api);

app.use(express.static('.'));
app.use(serveIndex('.', { icons: true }));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

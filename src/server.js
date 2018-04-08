const path = require('path');
const express = require('express');
const next = require('next');
const apiHandler = require('./api');
const cors = require('cors');

const dev = process.env.NODE_ENV !== 'production';
const app = next({
  dev,
  dir: path.resolve(__dirname + '/client'),
});
const nextHandler = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  server.use(cors());
  server.use('/api', apiHandler);
  server.get('*', (req, res) => {
    return nextHandler(req, res);
  });

  server.listen(80, err => {
    if (err) throw err;
    console.log('> Ready on http://127.0.0.1');
  });
});

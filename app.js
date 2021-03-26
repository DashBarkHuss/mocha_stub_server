const express = require('express');

const auth = require('./auth');

const port = 4000;
module.exports = () => {
  const app = express();
  app.use(auth.session);
  app.get('/allowUser2', (req, res) => {
    if (!req.user) return res.status(401).send();
    if (req.user.user === 2) return res.status(200).send();
  });
  app.post('/allowUser2', (req, res) => {
    if (!req.user) return res.status(401).send();
    if (req.user.user === 2) return res.status(200).send();
  });
  return {
    server: app.listen(port).on('listening', () => {
      console.log(`HTTP server listening on port ${port}`);
    }),
    app,
  };
};

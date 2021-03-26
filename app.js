const express = require('express');

const auth = require('./auth');

const app = express();
app.use(auth.session);
app.get('/allowUser2', (req, res) => {
  if (!req.user) return res.status(401).send();
  if (req.user.user === 2) return res.status(200).send();
});

app.listen(4050).on('listening', () => {
  console.log(`HTTP server listening on port 4050`);
});

module.exports = app;

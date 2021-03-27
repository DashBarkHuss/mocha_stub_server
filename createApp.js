const express = require('express');

const port = 4000;

let server;
let app;

  const init = (auth) => {

  app = express();
  app.use((req, res, next) => auth.session(req, res, next));
  app.get('/allowUser2', (req, res) => {
    if (!req.user) return res.status(401).send();
    if (req.user.user === 2) return res.status(200).send();
  });
  app.post('/allowUser2', (req, res) => {
    if (!req.user) return res.status(401).send();
    if (req.user.user === 2) return res.status(200).send();
  });

    server = app.listen(port).on('listening', () => {
        console.log(`HTTP server listening on port ${port}`);
    });
  }

module.exports = {
      init,
      app: () => app,
      server: () => server,
};

const auth = require('./auth');
const createApp = require('./createApp');

module.exports = createApp(auth);

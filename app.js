const auth = require('./auth');
const createApp = require('./createApp');

const application = createApp(auth);
application.init();

module.exports = application;

const server = require('./config/custom-express').app;
require('./config/routes')(server);
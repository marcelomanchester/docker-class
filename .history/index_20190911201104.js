const server = require('./config/custom-express').app;
console.log(server)
require('./config/routes')(server);
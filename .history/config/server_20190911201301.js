const http = require('http');

const hostname = 'localhost';
const port = 3000;
process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = 0

const server = require("./custom-express").app;

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
})

module.exports = {
    server
}
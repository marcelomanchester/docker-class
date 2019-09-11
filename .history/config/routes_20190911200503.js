const api = require("../api").router; 

module.exports = function (server) {
    console.log(server)
    server.use('/', api);
    console.log('Available route: /');

}
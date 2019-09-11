const api = require("../api").router; 

module.exports = function (server) {

    server.use('/', api);
    console.log('Available route: /');

}
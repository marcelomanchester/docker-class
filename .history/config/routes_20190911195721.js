const api = require("../api").routes; 

module.exports = function (server) {

    server.use('/', api);
    console.log('Available route: /');

}
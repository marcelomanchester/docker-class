const api = require("../api").routes; 

module.exports = function (server) {
    console.log("no routes")
    server.use('/', api);
}
const constants = require("../private/js/enums/constants");

module.exports = {
    servers: [
        {
            url: "http://localhost:" + constants.devPort,
            description: "Local server"
        },
        {
            url: "https://programming-resources-server.herokuapp.com",
            description: "Live server"
        }
    ]
};
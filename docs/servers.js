const serverInfo = require("../private/js/enums/serverInfoEnum");

module.exports = {
    servers: [
        {
            url: serverInfo.devUrl,
            description: "Local server"
        },
        {
            url: serverInfo.prodUrl,
            description: "Live server"
        }
    ]
};
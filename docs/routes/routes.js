const ping = require("./miscellaneous/ping");
const getAllResources = require("./resources/get-all-resources");

module.exports = {
    paths: {
        "/ping": {
            ...ping,
        },
        "/resources": {
            ...getAllResources,
        }
    }
}
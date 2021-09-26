const ping = require("./miscellaneous/ping");
const allResources = require("./resources/all-resources");
const resourceByName = require("./resources/resource-by-name");
const resourceByTypeName = require("./resources/resource-by-type-name");
const resourceByAuthorName = require("./resources/resource-by-author-name");

module.exports = {
    paths: {
        "/ping": {
            ...ping,
        },

        // Resources
        "/resources": {
            ...allResources,
        },
        "/resources/names/{name}": {
            ...resourceByName,
        },
        "/resources/types/{typeName}": {
            ...resourceByTypeName,
        },
        "/resources/authors/{authorName}": {
            ...resourceByAuthorName,
        },
    }
}
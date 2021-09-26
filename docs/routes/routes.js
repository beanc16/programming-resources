const ping = require("./miscellaneous/ping");
const allResources = require("./resources/all-resources");
const resourceByName = require("./resources/resource-by-name");
const resourceByTypeName = require("./resources/resource-by-type-name");
const resourceByAuthorName = require("./resources/resource-by-author-name");
const allFullResources = require("./fullResources/all-full-resources");
const fullResourceByName = require("./fullResources/full-resource-by-name");
const fullResourceByAuthorName = require("./fullResources/full-resource-by-author-name");
const fullResourceByTypeName = require("./fullResources/full-resource-by-type-name");

module.exports = {
    paths: {
        // Miscellaneous
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

        // Resource Authors
        //

        // Resource Types
        //

        // Full Resources
        "/full-resources": {
            ...allFullResources,
        },
        "/full-resources/names/{name}": {
            ...fullResourceByName,
        },
        "/full-resources/types/{typeName}": {
            ...fullResourceByTypeName,
        },
        "/full-resources/authors/{authorName}": {
            ...fullResourceByAuthorName,
        },
    }
}
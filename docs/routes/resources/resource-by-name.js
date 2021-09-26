module.exports = {
    get: {
        tags: ["resources"],
        description: "Query all resources with a name that contains the given name from the database",
        operationId: "getResourcesByName",
        parameters: [{
            "in": "path",
            "name": "name",
            "schema": {
                type: "string",
            },
            "required": true,
            "description": "Name of resources to get"
        }],
        responses: {
            // response code
            200: {
                description: "Successfully pulled all resources with the given name from the database",
                content: {
                    // content-type
                    "application/json": {
                        schema: {
                            $ref: "#/components/schemas/resourcesArray", // Schema model
                        },
                    },
                },
            },
            
            // response code
            500: {
                description: "Error connecting to the MongoDB server",
                content: {
                    // content-type
                    "application/json": {
                        schema: {
                            $ref: "#/components/schemas/MongoError", // Schema model
                        },
                    },
                },
            },
        },
    },
}

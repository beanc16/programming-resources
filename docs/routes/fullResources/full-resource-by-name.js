module.exports = {
    get: {
        tags: ["full-resources"],
        description: "Query all full resources with a name that contains the given name from the database",
        operationId: "get-full-resources-by-name",
        parameters: [{
            "in": "path",
            "name": "name",
            "schema": {
                type: "string",
            },
            "required": true,
            "description": "Name of full resources to get"
        }],
        responses: {
            // response code
            200: {
                description: "Successfully pulled all full resources with the given name from the database",
                content: {
                    // content-type
                    "application/json": {
                        schema: {
                            $ref: "#/components/schemas/fullResourcesArray", // Schema model
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

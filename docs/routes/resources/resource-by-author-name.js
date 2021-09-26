module.exports = {
    get: {
        tags: ["resources"],
        description: "Query all resources with an author name that contains the given author name from the database",
        operationId: "getResourcesByAuthorName",
        parameters: [],
        responses: {
            // response code
            200: {
                description: "Successfully pulled all resources with the given author name from the database",
                content: {
                    // content-type
                    "application/json": {
                        schema: {
                            $ref: "#/components/schemas/resourceArray", // Schema model
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

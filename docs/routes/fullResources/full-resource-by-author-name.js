module.exports = {
    get: {
        tags: ["full resources"],
        description: "Query all full resources with an author name that contains the given author name from the database",
        operationId: "getFullResourcesByAuthorName",
        parameters: [],
        responses: {
            // response code
            200: {
                description: "Successfully pulled all full resources with the given author name from the database",
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

module.exports = {
    get: {
        tags: ["resources"],
        description: "Query all resources from the database",
        operationId: "get-all-resources",
        parameters: [],
        responses: {
            // response code
            200: {
                description: "Successfully pulled all resources from the database",
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

module.exports = {
    get: {
        tags: ["resource-authors"],
        description: "Query all resource authors from the database",
        operationId: "get-all-resource-authors",
        parameters: [],
        responses: {
            // response code
            200: {
                description: "Successfully pulled all resource authors from the database",
                content: {
                    // content-type
                    "application/json": {
                        schema: {
                            $ref: "#/components/schemas/resourceAuthorsArray", // Schema model
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

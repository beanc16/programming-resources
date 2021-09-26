module.exports = {
    get: {
        tags: ["resource-types"],
        description: "Query all resource types from the database",
        operationId: "get-all-resource-types",
        parameters: [],
        responses: {
            // response code
            200: {
                description: "Successfully pulled all resource types from the database",
                content: {
                    // content-type
                    "application/json": {
                        schema: {
                            $ref: "#/components/schemas/resourceTypesArray", // Schema model
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

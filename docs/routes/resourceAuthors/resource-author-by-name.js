module.exports = {
    get: {
        tags: ["resource-authors"],
        description: "Query all resource authors with an author name that contains the given author name from the database",
        operationId: "get-resource-authors-by-author-name",
        parameters: [{
            "in": "path",
            "name": "authorName",
            "schema": {
                type: "string",
            },
            "required": true,
            "description": "Name (string or substring) of resource authors to get"
        }],
        responses: {
            // response code
            200: {
                description: "Successfully pulled all resource authors with the given author name from the database",
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

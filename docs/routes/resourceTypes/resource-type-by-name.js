module.exports = {
    get: {
        tags: ["resource-types"],
        description: "Query all resource types with a type name that contains the given type name from the database",
        operationId: "get-resource-types-by-type-name",
        parameters: [{
            "in": "path",
            "name": "typeName",
            "schema": {
                type: "string",
            },
            "required": true,
            "description": "Type name (string or substring) of resource types to get"
        }],
        responses: {
            // response code
            200: {
                description: "Successfully pulled all resource types with the given type name from the database",
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

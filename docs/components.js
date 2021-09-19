module.exports = {
    components: {
        schemas: {
            // Text Model
            text: {
                type: "string",
                description: "Any text string",
            },

            // Resources Array Model
            resourceArray: {
                type: "array",
                description: "An array of resources",
                items: {
                    $ref: "#/components/schemas/resource",
                }
            },

            // Resource Model
            resource: {
                type: "object",
                properties: {
                    _id: {
                        type: "string",
                        description: "The resource's ObjectId",
                        example: 'ObjectId("1234567890abcdefghijklmn")',
                    },
                    name: {
                        type: "string",
                        description: "The name of the resource",
                        example: "Design Patterns Tutorial",
                    },
                    type_name: {
                        type: "string",
                        description: "The type of resource",
                        example: "concept.designPattern",
                    },
                    type_order: {
                        type: "integer",
                        description: "The order that the resource should be in relative to other resources of the same type_name",
                        example: 1,
                    },
                    author_name: {
                        type: "string",
                        description: "The name of the person/group/organization that created the resource",
                        example: "Tutorialspoint",
                    },
                    url: {
                        type: "string",
                        description: "The link that the resource can be found at",
                        example: "https://www.tutorialspoint.com/design_pattern/index.htm",
                    },
                }
            },

            // Resource Author Model
            resource_author: {
                type: "object",
                properties: {
                    _id: {
                        type: "string",
                        description: "The resource author's ObjectId",
                        example: 'ObjectId("1234567890abcdefghijklmn")',
                    },
                    author_name: {
                        type: "string",
                        description: "The name of a person/group/organization that created one or more resources",
                        example: "Tutorialspoint",
                    },
                    author_youtube: {
                        type: "string",
                        description: "The URL of the author's YouTube channel",
                    },
                    author_website: {
                        type: "string",
                        description: "The URL of the author's Website",
                    },
                    author_twitter: {
                        type: "string",
                        description: "The URL of the author's Twitter profile",
                    },
                    author_instagram: {
                        type: "string",
                        description: "The URL of the author's Instagram profile",
                    },
                    author_facebook: {
                        type: "string",
                        description: "The URL of the author's Facebook profile",
                    },
                    author_linkedin: {
                        type: "string",
                        description: "The URL of the author's LinkedIn profile",
                    },
                    author_github: {
                        type: "string",
                        description: "The URL of the author's GitHub profile",
                    },
                }
            },

            // Resource Type Model
            resource_type: {
                type: "object",
                properties: {
                    _id: {
                        type: "string",
                        description: "The resource type's ObjectId",
                        example: 'ObjectId("1234567890abcdefghijklmn")',
                    },
                    type_name: {
                        type: "string",
                        description: "The type of one or more resources",
                        example: "concept.designPattern",
                    },
                    test: {
                        type: "string",
                        description: "test",
                        example: "test",
                    },
                }
            },

            // MongoError Model
            MongoError: {
                type: "object",
                properties: {
                    results: {
                        type: "null",
                        description: "A null field since there's an error"
                    },
                    error: {
                        type: "object",
                        properties: {
                            errno: {
                                type: "string",
                                description: "The MongoDB error number",
                                example: "ESERVFAIL",
                            },
                            code: {
                                type: "string",
                                description: "The MongoDB error code",
                                example: "ESERVFAIL",
                            },
                            syscall: {
                                type: "string",
                                description: "The MongoDB system call",
                                example: "querySrv",
                            },
                            hostname: {
                                type: "string",
                                description: "The MongoDB host",
                            },
                        }
                    },
                    status: {
                        type: "integer",
                        description: "The status code"
                    },
                }
            }
        }
    }
}
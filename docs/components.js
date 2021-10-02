module.exports = {
    components: {
        schemas: {
            // Text Model
            text: {
                type: "string",
                description: "Any text string",
            },



            /*
             * ARRAYS
             */

            // Resources Array
            resourcesArray: {
                type: "array",
                description: "An array of resources",
                items: {
                    $ref: "#/components/schemas/Resource",
                }
            },

            // Resource Authors Array
            resourceAuthorsArray: {
                type: "array",
                description: "An array of resource authors",
                items: {
                    $ref: "#/components/schemas/ResourceAuthor",
                }
            },

            // Resource Types Array
            resourceTypesArray: {
                type: "array",
                description: "An array of resource types",
                items: {
                    $ref: "#/components/schemas/ResourceType",
                }
            },

            // Full Resources Array
            fullResourcesArray: {
                type: "array",
                description: "An array of full resources",
                items: {
                    $ref: "#/components/schemas/FullResource",
                }
            },


            
            /*
             * MODELS
             */

            // Resource Model
            Resource: {
                type: "object",
                properties: {
                    _id: {
                        type: "string",
                        description: "The resource's ObjectId",
                        example: "1234567890abcdefghijklmn",
                    },
                    name: {
                        type: "string",
                        description: "The name of the resource",
                        example: "Design Patterns Tutorial",
                    },
                    typeName: {
                        type: "string",
                        description: "The type of resource",
                        example: "concept.designPattern",
                    },
                    typeOrder: {
                        type: "integer",
                        description: "The order that the resource should be in relative to other resources of the same type_name",
                        example: 1,
                    },
                    authorName: {
                        type: "string",
                        description: "The name of the person/group/organization that created the resource",
                        example: "Tutorialspoint",
                    },
                    url: {
                        type: "string",
                        description: "The link that the resource can be found at",
                        example: "https://www.tutorialspoint.com/design_pattern/index.htm",
                    },
                    urlType: {
                        type: "string",
                        description: "The type of resource found at the URL",
                        example: "article",
                    },
                }
            },

            // Resource Author Model
            ResourceAuthor: {
                type: "object",
                properties: {
                    _id: {
                        type: "string",
                        description: "The resource author's ObjectId",
                        example: "1234567890abcdefghijklmn",
                    },
                    authorName: {
                        type: "string",
                        description: "The name of a person/group/organization that created one or more resources",
                        example: "Tutorialspoint",
                    },
                    authorYoutube: {
                        type: "string",
                        description: "The URL of the author's YouTube channel",
                    },
                    authorWebsite: {
                        type: "string",
                        description: "The URL of the author's Website",
                    },
                    authorTwitter: {
                        type: "string",
                        description: "The URL of the author's Twitter profile",
                    },
                    authorInstagram: {
                        type: "string",
                        description: "The URL of the author's Instagram profile",
                    },
                    authorFacebook: {
                        type: "string",
                        description: "The URL of the author's Facebook profile",
                    },
                    authorLinkedIn: {
                        type: "string",
                        description: "The URL of the author's LinkedIn profile",
                    },
                    authorGithub: {
                        type: "string",
                        description: "The URL of the author's GitHub profile",
                    },
                }
            },

            // Resource Type Model
            ResourceType: {
                type: "object",
                properties: {
                    _id: {
                        type: "string",
                        description: "The resource type's ObjectId",
                        example: "1234567890abcdefghijklmn",
                    },
                    typeName: {
                        type: "string",
                        description: "The type of one or more resources",
                        example: "concept.designPattern",
                    },
                }
            },

            // Full Resource Model
            FullResource: {
                type: "object",
                properties: {
                    _id: {
                        type: "string",
                        description: "The resource's ObjectId",
                        example: "1234567890abcdefghijklmn",
                    },
                    name: {
                        type: "string",
                        description: "The name of the resource",
                        example: "Design Patterns Tutorial",
                    },
                    typeName: {
                        type: "string",
                        description: "The type of resource",
                        example: "concept.designPattern",
                    },
                    typeOrder: {
                        type: "integer",
                        description: "The order that the resource should be in relative to other resources of the same type_name",
                        example: 1,
                    },
                    authorName: {
                        type: "string",
                        description: "The name of the person/group/organization that created the resource",
                        example: "Tutorialspoint",
                    },
                    url: {
                        type: "string",
                        description: "The link that the resource can be found at",
                        example: "https://www.tutorialspoint.com/design_pattern/index.htm",
                    },
                    urlType: {
                        type: "string",
                        description: "The type of resource found at the URL",
                        example: "article",
                    },
                    author: {
                        $ref: "#/components/schemas/ResourceAuthor"
                    },
                    type: {
                        $ref: "#/components/schemas/ResourceType"
                    },
                }
            },


            
            /*
             * ERRORS
             */

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
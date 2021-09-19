module.exports = {
    get: {
        tags: ["miscellaneous"],
        description: 'Get a response that says "pong"',
        operationId: "ping",
        parameters: [],
        responses: {
          // response code
          200: {
            description: "Successfully pinged server",
            content: {
              // content-type
              "text/html": {
                schema: {
                  $ref: "#/components/schemas/text", // Schema model
                },
              },
            },
          },
        },
      },
}
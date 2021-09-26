/************
 * REQUIRES *
 ************/

// Read environment variables
const dotenv = require('dotenv');
dotenv.config();


// Important variables
const constants = require("./private/js/enums/constants");


// Routing
const express = require("express");
const app = express();


// CORS
const cors = require("cors");
app.use(cors());


// Swagger
const swaggerUi = require("swagger-ui-express");
const docs = require("./docs");

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(docs));


// Allow working with paths
const path = require("path");

// Set default directory for resources
const privateDir = path.join(__dirname, '../private/');
app.use(express.static(privateDir));





/*******************
 * EXTERNAL ROUTES *
 *******************/

// Get routes for MongoDB
const resources = require("./external_routes/resources");
const resourceTypes = require("./external_routes/types");
const resourceAuthors = require("./external_routes/authors");
const fullResources = require("./external_routes/fullResources");

app.use("/resources", resources);
app.use("/types", resourceTypes);
app.use("/authors", resourceAuthors);
app.use("/full-resources", fullResources);





/********
 * GETS *
 ********/

// Ping
app.get("/ping", function(req, res)
{
    res.send("pong");
});



// DEBUGGING
app.get("/*", function(req, res)
{
    res.status(404);
    res.send("Invalid URL");
});





/***********
 * HELPERS *
 ***********/

//





/********
 * PORT *
 ********/

app.listen(constants.port, function ()
{
  console.log("App listening on port " + constants.port);
});

/************
 * REQUIRES *
 ************/

// Important variables
const port = (process.env.PORT) ? process.env.PORT : 8000;


// Routing
const express = require("express");
const app = express();


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

app.use("/resources", resources);
app.use("/types", resourceTypes);
app.use("/authors", resourceAuthors);





/********
 * GETS *
 ********/

// Index
app.get("/", function(req, res)
{
    res.redirect("*");
});

// Ping
app.get("/ping", function(req, res)
{
    res.send("pong");
});



// DEBUGGING
app.get("/*", function(req, res)
{
    res.send("Invalid URL");
});





/***********
 * HELPERS *
 ***********/

//





/********
 * PORT *
 ********/

app.listen(port, function ()
{
  console.log("App listening on port " + port);
});


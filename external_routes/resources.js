module.exports = (function()
{
    'use strict';



    /************
     * REQUIRES *
     ************/

    // Routing
    const express = require("express");
    const app = express();
	
	
    // Mongo
    //const connection = require("./mongo_connection");
    //let MongoResults = require("./mongo_results");


    // Controllers
    //const ResourceController = require("../private/js/resources/ResourceController");





    /********
     * GETS *
     ********/
     
    // getAllResources
    app.get("/", function (req, res)
    {
    		/*
		ResourceController.getAll(req)
			.then(function (mongoResults)
			{
				res.send(mongoResults);
			})
			.catch(function (mongoResultsErr)
			{
				res.send(mongoResultsErr);
			});
		*/
    });

    // getResourceByTypeName
    app.get("/type-names/:typeName", async function (req, res)
    {
    		/*
		ResourceController.getByName(req)
			.then(function (mongoResults)
			{
				res.send(mongoResults);
			})
			.catch(function (mongoResultsErr)
			{
				res.send(mongoResultsErr);
			});
		*/
    });
	
	
	
	
	
    /**********
     * RETURN *
     **********/

    return app;
})();

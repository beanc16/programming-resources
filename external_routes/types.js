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
    //const TypeController = require("../private/js/resources/TypeController");





    /********
     * GETS *
     ********/
     
    // getAllTypes
    app.get("/", function (req, res)
    {
    		/*
		TypeController.getAll(req)
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
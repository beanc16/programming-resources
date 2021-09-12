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
    //const AuthorController = require("../private/js/resources/AuthorController");





    /********
     * GETS *
     ********/
     
    // getAllAuthors
    app.get("/", function (req, res)
    {
    		/*
		AuthorController.getAll(req)
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

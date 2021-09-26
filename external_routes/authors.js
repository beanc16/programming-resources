module.exports = (function()
{
    'use strict';



    /************
     * REQUIRES *
     ************/

    // Routing
    const express = require("express");
    const app = express();


    // Controllers
    const ResourceAuthorController = require("../private/js/controllers/ResourceAuthorController");





    /********
     * GETS *
     ********/
     
    // getAllAuthors
    app.get("/", function (req, res)
    {
      ResourceAuthorController.getAll(req)
        .then(function (mongoResults)
        {
          res.json(mongoResults);
        })
        .catch(function (mongoResultsErr)
        {
          if (mongoResultsErr.status != null)
          {
            res.status(mongoResultsErr.status);
          }
          
          res.json(mongoResultsErr);
        });
    });

    // getAuthorByName
    app.get("/names/:name", async function (req, res)
    {
      const name = req.params.name;

      ResourceAuthorController.getByName(name)
        .then(function (mongoResults)
        {
          res.json(mongoResults);
        })
        .catch(function (mongoResultsErr)
        {
          if (mongoResultsErr.status != null)
          {
            res.status(mongoResultsErr.status);
          }
          
          res.json(mongoResultsErr);
        });
    });
	
	
	
	
	
    /**********
     * RETURN *
     **********/

    return app;
})();

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
    const ResourceController = require("../private/js/controllers/ResourceController");





    /********
     * GETS *
     ********/
     
    // getAllResources
    app.get("/", function (req, res)
    {
      ResourceController.getAll(req)
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

    // getResourceByTypeName
    app.get("/:typeName", async function (req, res)
    {
      const typeName = req.params.typeName;

      ResourceController.getByTypeName(typeName)
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

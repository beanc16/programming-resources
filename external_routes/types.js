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
    const ResourceTypeController = require("../private/js/controllers/ResourceTypeController");





    /********
     * GETS *
     ********/
     
    // getAllTypes
    app.get("/", function (req, res)
    {
      ResourceTypeController.getAll(req)
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

    // getTypesByName
    app.get("/names/:typeName", async function (req, res)
    {
      const typeName = req.params.typeName;

      ResourceTypeController.getByTypeName(typeName)
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

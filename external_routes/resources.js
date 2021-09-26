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

    // getResourceByName
    app.get("/names/:name", async function (req, res)
    {
      const name = req.params.name;

      ResourceController.getByName(name)
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
    app.get("/types/:typeName", async function (req, res)
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

    // getResourceByAuthorName
    app.get("/authors/:authorName", async function (req, res)
    {
      const authorName = req.params.authorName;

      ResourceController.getByAuthorName(authorName)
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

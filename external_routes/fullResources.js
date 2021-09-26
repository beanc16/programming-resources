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
    const FullResourceController = require("../private/js/controllers/FullResourceController");





    /********
     * GETS *
     ********/
     
    // getAllFullResources
    app.get("/", function (req, res)
    {
      FullResourceController.getAll(req)
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

    // getFullResourceByName
    app.get("/names/:name", async function (req, res)
    {
      const name = req.params.name;

      FullResourceController.getByName(name)
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

    // getFullResourceByTypeName
    app.get("/types/:typeName", async function (req, res)
    {
      const typeName = req.params.typeName;

      FullResourceController.getByTypeName(typeName)
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

    // getFullResourceByAuthorName
    app.get("/authors/:authorName", async function (req, res)
    {
      const authorName = req.params.authorName;

      FullResourceController.getByAuthorName(authorName)
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

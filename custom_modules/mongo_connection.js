module.exports = (function()
{
    'use strict';



    /************
     * REQUIRES *
     ************/
    
    // Mongo
    const { MongoClient } = require("mongodb");
    const uri = process.env.MONGO_URI;
    
    
    
    class MongoConnection
    {
    	constructor(dbName)
    	{
    		this.client = new MongoClient(uri);
    		this.collections = [];
    		this.dbName = dbName;
    	}
    	
    	async run(callback, dbName)
    	{
    		return new Promise(async (resolve, reject) =>
    		{
    			try
    			{
    				await this.client.connect();
    				
    				const db = (dbName) 
    					? this.client.db(dbName) 
    					: this.client.db(this.dbName);
    				
    				if (callback != null)
    				{
    					await callback(db, this.client);
    				}
    			}
    			
    			catch (err)
    			{
    				this.close();
    				reject(err);
    			}
    		});
    	}
    	
    	async getCollection(collectionName, dbName)
    	{
    		return new Promise((resolve, reject) =>
    		{
			let collection;
			
			this.run(function (db, client)
			{
				collection = db.collection(collectionName);
				resolve(collection);
			}, dbName)
			
			.catch(function (err)
			{
				reject(err);
			});
		});
    	}
    	
    	async close()
    	{
    		return new Promise(async (resolve, reject) =>
    		{
    			this.client.close()
    				.then(function ()
    				{
    					resolve();
				})
				.catch(function (err)
				{
					reject(err);
				});
    		});
    	}
    }
	
	
	
	
	
    /**********
     * RETURN *
     **********/

    return MongoConnection;
})();

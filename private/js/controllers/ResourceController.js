// Mongo
const MongoConnection = require("../../../custom_modules/mongo_connection");
const connection = new MongoConnection(process.env.DB_NAME);
const MongoResults = require("../../../custom_modules/mongo_results");


// Collections
const collectionsEnum = require("../enums/collectionsEnum");


// Options
const sortOptions = {"type_name": 1, "type_order": 1};


// Models
const Resource = require("../models/Resource");



class ResourceController
{
	/* 
	 * GETS
	 */
	
	static async getAll()
	{
		return new Promise(function (resolve, reject)
		{
			connection.getCollection(collectionsEnum.Resources)
				.then(async function (collection)
				{
					// Make query
					const result = await collection.find({}).sort(sortOptions);
					const array = await result.toArray();
					
					// Done searching, close connection
					await connection.close();
					
					// Parse array into an array of models
					const models = ResourceController._getAsModels(array);
					
					// Initialize results
					const mongoResults = new MongoResults(models, null);
					resolve(mongoResults);
				})
				.catch(function (err)
				{
					const errResults = new MongoResults(null, err, 500);
					reject(errResults);
				});
		});
	}
	
	
	
	static _getAsModels(array)
	{
		const models = [];
		
		for (let i = 0; i < array.length; i++)
		{
			const model = ResourceController._getAsModel(array[i]);
			models.push(model);
		}
		
		return models;
	}
	
	static _getAsModel(document)
	{
		return new Resource(document);
	}
}



module.exports = (function()
{
    return ResourceController;
})();

// Mongo
const MongoConnection = require("../../../custom_modules/mongo_connection");
const connection = new MongoConnection(process.env.DB_NAME);
const MongoResults = require("../../../custom_modules/mongo_results");


// Collections
const collectionsEnum = require("../enums/collectionsEnum");


// Options
const sortOptions = require("../enums/sortOptionsEnums").authorSortOptions;


// Models
const ResourceAuthor = require("../models/ResourceAuthor");



class ResourceAuthorController
{
	/* 
	 * GETS
	 */
	
	static async getAll()
	{
		return new Promise(function (resolve, reject)
		{
			ResourceAuthorController._queryResources()
				.then(function (mongoResults)
				{
					resolve(mongoResults);
				})
				.catch(function (errResults)
				{
					reject(errResults);
				});
		});
	}

	static async getByAuthorName(name)
	{
		return new Promise(function (resolve, reject)
		{
			ResourceAuthorController._queryResources({
				"author_name": {
					$regex: name,
					$options : "i",	// Case insensitive search
				},
			})
				.then(function (mongoResults)
				{
					resolve(mongoResults);
				})
				.catch(function (errResults)
				{
					reject(errResults);
				});
		});
	}



	static async _queryResources(findParams = {})
	{
		return new Promise(function (resolve, reject)
		{
			connection.getCollection(collectionsEnum.Authors)
				.then(async function (collection)
				{
					// Make query
					const result = await collection.find(findParams)
												   .sort(sortOptions);
					const array = await result.toArray();
					
					// Done searching, close connection
					await connection.close();
					
					// Parse array into an array of models
					const models = ResourceAuthorController._getAsModels(array);
					
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
			const model = ResourceAuthorController._getAsModel(array[i]);
			models.push(model);
		}
		
		return models;
	}
	
	static _getAsModel(document)
	{
		return new ResourceAuthor(document);
	}
}



module.exports = ResourceAuthorController;

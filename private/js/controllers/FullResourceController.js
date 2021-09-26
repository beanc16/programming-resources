// Mongo
const MongoConnection = require("../../../custom_modules/mongo_connection");
const connection = new MongoConnection(process.env.DB_NAME);
const MongoResults = require("../../../custom_modules/mongo_results");


// Collections
const collectionsEnum = require("../enums/collectionsEnum");


// Options
const sortOptions = require("../enums/sortOptionsEnums").resourceSortOptions;
const aggregateArrayOptions = [
	{
		// Join resources with resource authors
		"$lookup": {
			"from": "resources.authors",
			"localField": "author_name",
			"foreignField": "author_name",
			"as": "author",
		}
	},
	{
		// Join resources with resource types
		"$lookup": {
			"from": "resources.types",
			"localField": "type_name",
			"foreignField": "type_name",
			"as": "type",
		}
	},
	{
		// Sort the results with the given options
		"$sort": sortOptions,
	},
];

// Add function to clone any array
Array.prototype.clone = function()
{
	return JSON.parse(JSON.stringify(this));
};


// Models
const FullResource = require("../models/FullResource");



class FullResourceController
{
	/* 
	 * GETS
	 */
	
	static async getAll()
	{
		return new Promise(function (resolve, reject)
		{
			FullResourceController._queryResources()
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

	static async getByName(name)
	{
		return new Promise(function (resolve, reject)
		{
			FullResourceController._queryResources({
				"$match": {
					"name": name,
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

	static async getByTypeName(typeName)
	{
		return new Promise(function (resolve, reject)
		{
			FullResourceController._queryResources({
				"$match": {
					"type_name": typeName,
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

	static async getByAuthorName(authorName)
	{
		return new Promise(function (resolve, reject)
		{
			FullResourceController._queryResources({
				"$match": {
					"author_name": authorName,
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



	static async _queryResources(...aggregateArrayOptionObjs)
	{
		return new Promise(function (resolve, reject)
		{
			connection.getCollection(collectionsEnum.Resources)
				.then(async function (collection)
				{
					const tempAggregateOptions = aggregateArrayOptions.clone();
					// Add aggregate options if they were given
					if (tempAggregateOptions.length > 0)
					{
						for (const i in aggregateArrayOptionObjs)
						{
							if (typeof aggregateArrayOptionObjs[i] === "object")
							{
								tempAggregateOptions.push(aggregateArrayOptionObjs[i]);
							}
						}
					}

					// Make query
					const result = await collection.aggregate(tempAggregateOptions);
					let array = await result.toArray();
					array = FullResourceController._parseResult(array);
					
					// Done searching, close connection
					await connection.close();
					
					// Parse array into an array of models
					const models = FullResourceController._getAsModels(array);
					
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

	static _parseResult(array)
	{
		array.map(function (curFullResource)
		{
			// Make author an object rather than an array
			if (curFullResource.author.length == 1)
			{
				curFullResource.author = curFullResource.author[0];
			}

			// Make type an object rather than an array
			if (curFullResource.type.length == 1)
			{
				curFullResource.type = curFullResource.type[0];
			}
		});

		return array;
	}
	
	static _getAsModels(array)
	{
		const models = [];
		
		for (let i = 0; i < array.length; i++)
		{
			const model = FullResourceController._getAsModel(array[i]);
			models.push(model);
		}
		
		return models;
	}
	
	static _getAsModel(document)
	{
		return new FullResource(document);
	}
}



module.exports = FullResourceController;

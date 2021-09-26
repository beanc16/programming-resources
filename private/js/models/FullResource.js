const ResourceAuthor = require("./ResourceAuthor");
const ResourceType = require("./ResourceType");


class FullResource
{
	constructor(document)
	{
		// Resource
		this._id = document._id;
		this.name = document.name;
		this.description = document.description;
		this.typeName = document.type_name;
		this.typeOrder = document.type_order;
		this.authorName = document.author_name;
		this.url = document.url;
		
		// Author
		this.author = new ResourceAuthor(document.author);

		// Type
		this.type = new ResourceAuthor(document.type);
	}
}



module.exports = FullResource;


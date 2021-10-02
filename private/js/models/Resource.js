class Resource
{
	constructor(document)
	{
		this._id = document._id;
		this.name = document.name;
		this.description = document.description;
		this.typeName = document.type_name;
		this.typeOrder = document.type_order;
		this.authorName = document.author_name;
		this.url = document.url;
		this.urlType = document.url_type;
	}
}



module.exports = Resource;


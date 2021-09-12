class Resource
{
	constructor(document)
	{
		this._id = document._id;
		this.name = document.name;
		this.description = document.description;
		this.type_name = document.type_name;
		this.type_order = document.type_order;
		this.author_name = document.author_name;
		this.url = document.url;
	}
}

module.exports = Resource;


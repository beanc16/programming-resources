class ResourceType
{
	constructor(document)
	{
		this._id = document._id;
		this.typeName = document.type_name;
	}
}

module.exports = ResourceType;


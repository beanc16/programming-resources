const collectionsEnum = {
	"Resources": process.env.COLLECTION_RESOURCE,
	"Authors": process.env.COLLECTION_AUTHOR,
	"Types": process.env.COLLECTION_TYPE,
};

Object.freeze(collectionsEnum);



module.exports = (function()
{
	return collectionsEnum;
})();

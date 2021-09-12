class MongoResults
{
	constructor(results, error, status)
	{
		this.results = results;
		this.error = error;
		
		if (status != null)
		{
			this.status = status;
		}
		else if (error === null)
		{
			this.status = 200;
		}
	}
	
	
	
	wasSuccessful()
	{
		if (this.results !== null || this.status === 200)
		{
			return true;
		}
		
		return false;
	}
	
	wasUnsuccessful()
	{
		return !this.wasSuccessful();
	}
}





module.exports = MongoResults;


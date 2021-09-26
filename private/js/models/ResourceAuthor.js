class ResourceAuthor
{
	constructor(document)
	{
		this._id = document._id;
		this.authorName = document.author_name;
		this.authorYoutube = document.author_youtube;
		this.authorWebsite = document.author_website;
		this.authorTwitter = document.author_twitter;
		this.authorInstagram = document.author_instagram;
		this.authorFacebook = document.author_facebook;
		this.authorLinkedIn = document.author_linkedin;
		this.authorGithub = document.author_github;
	}
}



module.exports = ResourceAuthor;


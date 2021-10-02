import React from "react";

// Helpers
import data from "../../helpers/queries/dataStorageSingleton";
import urlType from "../../helpers/enums/urlTypes";

// Components
import Article from "../resources/article";
import Video from "../resources/video";
import VideoLoading from "../resources/videoLoading";


export default class ResourceRoute extends React.Component
{
    constructor(props, category, subcategory)
    {
        super(props);
        this.state = {
            "category": category,
            "subcategory": subcategory,
            "resources": <VideoLoading />,
        };
    }

    componentDidMount()
    {
        // Initialize data if it doesn't exist yet
        if (!data.isInitialized)
        {
            data.initialize(data)
                .then(() =>
                {
                    this.setState({
                        "resources": this._getResourcesAsComponents(),
                    });
                });
        }

        // Use existing data if it's already initialized
        else
        {
            this.setState({
                "resources": this._getResourcesAsComponents(),
            });
        }
    }

    _getResourcesAsComponents()
    {
        const fullResources = data.getFullResourcesFor(this.state.category, 
                                                       this.state.subcategory);
        let resourceComponents = [];
        let curResource;

        for (let i = 0; i < fullResources.length; i++)
        {
            if (fullResources[i].urlType === urlType.ARTICLE)
            {
                curResource = <Article 
                    name={fullResources[i].name}
                    description={fullResources[i].description}
                    authorName={fullResources[i].authorName}
                    url={fullResources[i].url}
                />;
            }
            else if (fullResources[i].urlType === urlType.VIDEO)
            {
                curResource = <Video 
                    name={fullResources[i].name}
                    description={fullResources[i].description}
                    authorName={fullResources[i].authorName}
                    url={fullResources[i].url}
                />;
            }

            resourceComponents.push(curResource);
        }

        return resourceComponents;
    }



    render()
    {
        return(
            <div id={"pl-" + this.state.subcategory}>
                <h1>{this.state.subcategory.capitalize()}</h1>
                {this.state.resources}
            </div>
        );
    }
}





// Get any string as itself with the first letter capitalized
String.prototype.capitalize = function()
{
    return this.charAt(0).toUpperCase() + this.slice(1);
}

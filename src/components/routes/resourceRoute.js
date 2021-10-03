import React from "react";

// Helpers
import data from "../../helpers/queries/dataStorageSingleton";
import urlType from "../../helpers/enums/urlTypes";
import "../../helpers/prototypes/string";
import "../../helpers/prototypes/object";

// Components
import Article from "../resources/article";
import Video from "../resources/video";
import VideoLoading from "../resources/videoLoading";
import ResourceGroup from "../resources/resourceGroup";


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
        
        if (Array.isArray(fullResources))
        {
            resourceComponents = this._getResourcesComponentArray(fullResources);
        }

        else if (Object.isObject(fullResources))
        {
            resourceComponents = this._getResourcesObjectAsComponentArray(fullResources);
        }

        return resourceComponents;
    }

    _getResourcesComponentArray(fullResources)
    {
        let resourceComponents = [];
        let curResource;
        
        for (let i = 0; i < fullResources.length; i++)
        {
            if (fullResources[i].urlType === urlType.ARTICLE ||
                fullResources[i].urlType === urlType.ASSET)
            {
                curResource = <Article 
                    key={fullResources[i]._id} 
                    name={fullResources[i].name}
                    description={fullResources[i].description}
                    authorName={fullResources[i].authorName}
                    url={fullResources[i].url}
                />;
            }
            else if (fullResources[i].urlType === urlType.VIDEO)
            {
                curResource = <Video 
                    key={fullResources[i]._id} 
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

    _getResourcesObjectAsComponentArray(fullResources)
    {
        let resourceComponents = [];
        let curResource, curResourceGroup, value;

        if (Object.isObject(fullResources))
        {
            for (const key in fullResources)
            {
                value = fullResources[key];
                curResource = this._getResourcesObjectAsComponentArray(value);
                curResourceGroup = <ResourceGroup groupName={key} key={key}>
                    {curResource}
                </ResourceGroup>

                // Concat adds one resource or an array of resources to maintain one single array
                resourceComponents.push(curResourceGroup);
            }
        }

        if (Array.isArray(fullResources))
        {
            return this._getResourcesComponentArray(fullResources);
        }

        return resourceComponents;
    }



    render()
    {
        return(
            <div id={`${this.state.category.toHtmlId()}-${this.state.subcategory.toHtmlId()}`}>
                <h1>{this.state.subcategory.toHeader()}</h1>
                {this.state.resources}
            </div>
        );
    }
}

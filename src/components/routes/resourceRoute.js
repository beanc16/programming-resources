import React from "react";
import data from "../../helpers/queries/dataStorageSingleton";

export default class ResourceRoute extends React.Component
{
    constructor(props, category, subcategory)
    {
        super(props);
        this.state = {
            "category": category,
            "subcategory": subcategory,
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
                        "resources": data.getFullResourcesFor(this.state.category, 
                                                              this.state.subcategory),
                    }, () => console.log("this.state.resources 1:", this.state.resources));
                });
        }

        // Use existing data if it's already initialized
        else
        {
            this.setState({
                "resources": data.getFullResourcesFor(this.state.category, 
                                                      this.state.subcategory),
            }, () => console.log("this.state.resources 2:", this.state.resources));
        }
    }
}

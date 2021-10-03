import axios from "axios";
import routes from "../enums/server";


export default class DataStorage
{
    constructor()
    {
        this._storage = {
            "fullResources": {}
        };
    }

    async initialize()
    {
        return new Promise((resolve, reject) =>
        {
            axios.get(routes.fullResources.all)
                .then((results) =>
                {
                    const resources = results.data.results;
                    for (const i in resources)
                    {
                        this.pushResource(resources[i]);
                    }
                    resolve();
                })
                .catch(function (err)
                {
                    console.log("err:", err);
                    reject();
                });
        });
    }



    /*
     * GET
     */

    get isInitialized()
    {
        const keys = Object.keys(this.fullResources);

        if (keys.length > 0)
        {
            return true;
        }
        return false;
    }

    get data()
    {
        return this._storage;
    }

    get fullResources()
    {
        return this._storage.fullResources;
    }

    getFullResourcesFor(category, subcategory)
    {
        if (!this._storage.fullResources[category])
        {
            return null;
        }

        return this._storage.fullResources[category][subcategory];
    }



    /*
     * Insert
     */

    push(key1, key2, key3, key4, value)
    {
        // Initialize empty data if it doesn't exist yet
        if (!this._storage[key1][key2])
        {
            this._storage[key1][key2] = {};
        }

        if (!this._storage[key1][key2][key3] && !key4)
        {
            this._storage[key1][key2][key3] = [];
        }

        if (!this._storage[key1][key2][key3] && key4)
        {
            this._storage[key1][key2][key3] = {};
            this._storage[key1][key2][key3][key4] = [];
        }

        if (key4 && !this._storage[key1][key2][key3][key4])
        {
            this._storage[key1][key2][key3][key4] = [];
        }

        // Push data to storage
        if (!key4)
        {
            this._storage[key1][key2][key3].push(value);
        }
        else if (key4)
        {
            this._storage[key1][key2][key3][key4].push(value);
        }
    }

    pushResource(value)
    {
        // Type names come in formatted such as: "category.subcategory"
        const keys = value.typeName.split(".");
        this.push("fullResources", keys[0], keys[1], keys[2], value);
    }
}

import axios from "axios";
import routes from "../enums/server";


class DataStorage
{
    constructor()
    {
        this._storage = {
            "fullResources": {}
        };
        this.initializeStorage();
    }

    initializeStorage()
    {
        axios.get(routes.fullResources.all)
            .then((results) =>
            {
                const resources = results.data.results;
                for (const i in resources)
                {
                    this.pushResource(resources[i]);
                }
            })
            .catch(function (err)
            {
                console.log("err:", err);
            });
    }



    /*
     * GET
     */

    get data()
    {
        return this._storage;
    }

    get fullResources()
    {
        return this._storage.fullResources;
    }



    /*
     * Insert
     */

    push(key1, key2, key3, value)
    {
        // Initialize empty data if it doesn't exist yet
        if (!this._storage[key1][key2])
        {
            this._storage[key1][key2] = {};
        }

        if (!this._storage[key1][key2][key3])
        {
            this._storage[key1][key2][key3] = [];
        }

        // Push data to storage
        this._storage[key1][key2][key3].push(value);
    }

    pushResource(value)
    {
        // Type names come in formatted such as: "category.subcategory"
        const keys = value.typeName.split(".");
        this.push("fullResources", keys[0], keys[1], value);
    }
}



export default DataStorage;

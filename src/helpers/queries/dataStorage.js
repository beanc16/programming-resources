import axios from "axios";
import routes from "../enums/server";


class DataStorage
{
    constructor()
    {
        this._storage = {
            "resources": []
        };
        this.initializeStorage();
    }

    initializeStorage()
    {
        axios.get(routes.resources.all)
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

    get resources()
    {
        return this._storage.resources;
    }



    /*
     * Insert
     */

    add(key, value)
    {
        this._storage[key] = value;
    }

    push(key, value)
    {
        this._storage[key].push(value);
    }

    pushResource(value)
    {
        this.push("resources", value);
    }
}



export default DataStorage;

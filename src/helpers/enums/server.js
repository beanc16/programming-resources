const baseServerUrl = "https://programming-resources-microservice.vercel.app";
Object.freeze(baseServerUrl);



const routes = {
    "resources": {
        "all": "/resources",
        "byName": "/resources/names/",
        "byTypeName": "/resources/types/",
        "byAuthorName": "/resources/authors/",
    },
    "resourceAuthors": {
        "all": "/resource-authors",
        "byName": "/resource-authors/names/",
    },
    "resourceTypes": {
        "all": "/resource-types",
        "byName": "/resource-types/names/",
    },
    "fullResources": {
        "all": "/full-resources",
        "byName": "/full-resources/names/",
        "byTypeName": "/full-resources/types/",
        "byAuthorName": "/full-resources/authors/",
    },
    "miscellaneous": {
        "ping": "/ping",
    }
};

for (const key in routes)
{
    if (typeof routes[key] === "object")
    {
        for (const key2 in routes[key])
        {
            routes[key][key2] = baseServerUrl + routes[key][key2];
        }
    }

    else
    {
        routes[key] = baseServerUrl + routes[key];
    }
}

Object.freeze(routes);



export default routes;

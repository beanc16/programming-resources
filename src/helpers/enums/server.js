const baseServerUrl = "https://programming-resources-server.herokuapp.com";
Object.freeze(baseServerUrl);



const routes = {
    "ping": "/ping",
    "resources": {
        "all": "/resources",
    },
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

const routes = require("./routes/routes");
const basicInfo = require("./basicInfo");
const components = require("./components");
const servers = require("./servers");
const tags = require("./tags");

module.exports = {
    ...basicInfo,
    ...servers,
    ...tags,
    ...components,
    ...routes
};

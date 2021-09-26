// Development environment
const devPort = 8000;
const devBaseUrl = "http://localhost";
const devUrl = `${devBaseUrl}:${devPort}`;

// Production environment
const prodPort = 80;
const prodUrl = "https://programming-resources-server.herokuapp.com";

// Frontend environment
const frontEndUrl = "https://beanc16.github.io/programming-resources";



module.exports = {
    port: (process.env.PORT) ? process.env.PORT : devPort,

    // Development environment
    devPort: devPort,
    devUrl: devUrl,

    // Production environment
    prodPort: (process.env.PORT) ? process.env.PORT : prodPort,
    prodUrl: prodUrl,
    
    // Frontend environment
    frontEndUrl: frontEndUrl,
};

// Get any string as itself with the first letter capitalized
String.prototype.capitalize = function()
{
    return this.charAt(0).toUpperCase() + this.slice(1);
}

// Split this string into an array on each capital letter
String.prototype.splitOnUppercase = function()
{
    // Split this string into an array on each capital letter
    return this.split(/(?=[A-Z])/);
}

/**
 * Get any string as an html id such that: 
 * "lowercaseSeperatedByHyphens".toHtmlId()
 * = "lowercase-seperated-by-hyphens"
 */
String.prototype.toHtmlId = function()
{
    // Split this string into an array on each capital letter
    let array = this.splitOnUppercase();

    // Make each string lowercase
    array = array.map((str) => str.toLowerCase());

    // Return each string as one, with a hyphen between each
    return array.join("-");
}

/**
 * Get any string as a header such that: 
 * "lowercaseSeperatedByHyphens".toHtmlId()
 * = "lowercase-seperated-by-hyphens"
 */
String.prototype.toHeader = function()
{
    // Split this string into an array on each capital letter
    let array = this.splitOnUppercase();

    // Make each string lowercase
    array = array.map((str) => str.capitalize());

    // Return each string as one, with a space between each
    return array.join(" ");
}



// Hide console warning about not editing prototypes
/*eslint no-extend-native: ["error", { "exceptions": ["String"] }]*/

// Return true if this is an object
Object.isObject = function(obj)
{
    return (typeof obj === 'object' &&  // Is an object
            !Array.isArray(obj) &&      // Is not an array
            obj !== null);              // Is not null
}
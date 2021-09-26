const resourceSortOptions = {
    "type_name": 1,
    "type_order": 1,
};
const authorSortOptions = {
    "author_name": 1,
};
const typeSortOptions = {
    "type_name": 1,
};

Object.freeze(resourceSortOptions);
Object.freeze(authorSortOptions);
Object.freeze(typeSortOptions);



module.exports = {
    "resourceSortOptions": resourceSortOptions,
    "authorSortOptions": authorSortOptions,
    "typeSortOptions": typeSortOptions,
};

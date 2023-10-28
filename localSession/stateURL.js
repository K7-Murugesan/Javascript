// Add a parameter to the current URL
function addParameter(key, value) {
    const url = new URL(window.location.href);
    url.searchParams.set(key, value);
    window.history.pushState({}, '', url);
    console.log( url );
}

// Read a parameter from the current URL
function getParameter(key) {
    const url = new URL(window.location.href);
    return url.searchParams.get(key);
}
console.log( Object.prototype.constructor.length );
// Add a 'page' parameter with value '2' to the URL
addParameter('page', '1');

// Retrieve the 'page' parameter value from the URL
const currentPage = getParameter('page');

console.log( currentPage );
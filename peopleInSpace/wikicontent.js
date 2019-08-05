var wikiSearchUrl='https://en.wikipedia.org/w/api.php?action=query&list=prefixsearch&format=json&pssearch=';
var wikiContentUrl='https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=';
function wikiContent(term,fct) {
    //console.log(wikiSearchUrl+term);
    loadJSON('https://en.wikipedia.org/w/api.php?action=query&format=json&list=prefixsearch&pssearch=Star%20Wars',gotSearch,'jsonp');
}
function gotSearch(d) {
    console.log(d);
}
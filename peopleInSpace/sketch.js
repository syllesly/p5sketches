var spaceData;
var socket;
function preload() {
    loadJSON('http://api.open-notify.org/astros.json',gotData);
    //loadJSON('https://crossorigin.me/https://en.wikipedia.org/w/api.php?action=query&prop=revisions&rvprop=content&format=json&titles=Michael_Jackson',gotSearch, 'jsonp');
    //wikiContent("Michael%20Jackson");
}
function gotData(data) {
    spaceData=data;
}
function setup() {
    socket=io.connect('http://localhost:5500/');
    createCanvas(window.innerWidth,window.innerHeight);
    fill(255);
    socket.emit('getjson', {u:wikiSearchUrl+spaceData.people[0].name});
    socket.on('returnjson', (data) => {
        if(data.query.prefixsearch) {
            var term=data.query.prefixsearch[0].title;
            socket.emit('getjson', {u:wikiContentUrl+term});
        }else {
            var pgeId=Object.keys(data.query.pages)[0];
            if(data.query.pages.includes("may refer to: "))
        }
    })
}
function draw() {
    background(0);
    for(var i=0;i<spaceData.people.length;i++) {
        text(spaceData.people[i].name,10,height/spaceData.people.length*(i+0.5));
        text(spaceData.people[i].craft, textWidth(spaceData.people[i].name)*1.5,height/spaceData.people.length*(i+0.5));
    }
}
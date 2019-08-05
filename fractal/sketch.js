var points=[];
var nrPoints;
var x;
var prev;
var r;
var dprev;
var shape="Sierpinski Triangle";
var dropdown;
function setup() {
    dropdown=createSelect();
    if(window.location.search.split("=")[1]) {
        shape=window.location.search.split("=")[1];
        shape=decodeURI(shape);
        if(!shapes[shape]) {
            window.location.href="";
        }
    }
    for(s in shapes) {
        if(shapes[s]) {
            dropdown.option(s,s);
        }
    }
    dropdown.value(shape);
    dropdown.position(10,10);
    dropdown.changed(changeWindow);
    nrPoints=shapes[shape].points;
    createCanvas(window.innerWidth,window.innerHeight);
    background(0);
    strokeWeight(5);
    stroke(255,0,0);
    for(var i=0;i<nrPoints;i++) {
        var v=p5.Vector.fromAngle(radians(360/nrPoints*i-90));
        v.mult(height/2.2);
        v.add(width/2,height/2);
        points.push(v);
        point(v.x,v.y);
    }
    strokeWeight(1);
    stroke(255,255,255,70);
    x=createVector(random(width),random(height));
}
function draw() {
    for(var i=0;i<200;i++) {
        r=floor(random(nrPoints));
        for(;!shapes[shape].i();) {
            r=floor(random(nrPoints));
        }
        x=p5.Vector.lerp(x,points[r],0.5);
        point(x.x,x.y);
        dprev=prev;
        prev=r;
    }
}
function changeWindow() {
    window.location.href="?a="+dropdown.value();
}
var a=0
var x=0
var y=0
var p;
var startP;
var canvas;
var startGif=false;
var locStartGif=false;
var startPos={x:-1000,y:-1000};
var pos={};
function setup() {
    var p5Canvas=createCanvas(400, 400);
    canvas=p5Canvas.canvas;
    background(220);
    noStroke();
    p=round(Math.PI*10)/10;
    startP=round(p*20);
}

function draw() {
    colorMode('rgb');
    background(220,10);
    colorMode('hsl');
	a=1;
	x+=2;
    y+=0.1;
    x=round(x*10)/10;
    y=round(y*10)/10;
	for(var i=0;i<=200;i++) {
		fill(i*2,100,30);
        ellipse(sin(x/7.2+i/100)*200+200,cos(y/7.4+i/100)*200+200,10*a+2);
        if(i==0) {
            pos.x=round((sin(x/7.2+i/100)*200+200)*10)/10;
            pos.y=round((cos(y/7.4+i/100)*200+200)*10)/10;
        }
        if(!locStartGif && startGif) {
            startPos.x=pos.x;
            startPos.y=pos.y;
            locStartGif=true;
        }
    }
    x=round(x*10)/10;
    y=round(y*10)/10;
    if(y==startP){
        capturer.start();
        startGif=true;
    }
    if(round(pos.x)==round(startPos.x) && round(pos.y)==round(startPos.y) && y>startP+0.2) {
        capturer.stop();
        capturer.save();
        console.log("stopped");
    }
    if(startGif) {
        capturer.capture(canvas);
    }
}
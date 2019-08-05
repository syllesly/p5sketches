var dirX=0;
var dirY=0;
var parts=[];
var partSize;
var w;
var h;
var pickupX=0;
var pickupY=0;
var points=0;
var dead;
var xPlus;
function setup() {
    createCanvas(window.innerWidth,window.innerHeight);
    startup();
}
function draw() {
    var startupBool=false;
    background(50,50,50);
    if(dead<0) {
        setbackground(0,0,0);
        movePlayer();
        fill(255,255,255);
        ellipse(pickupX*partSize+partSize/2+xPlus,pickupY*partSize+partSize/2,partSize*0.8);
        for(var i=0;i<parts.length;i++) {
            if(frameCount%7==0) {
                if(i==0) {
                    parts[i].oldX=parts[i].x;
                    parts[i].oldY=parts[i].y;
                    parts[i].x+=dirX;
                    parts[i].y+=dirY;
                    if(goToEdge(parts[i].x,0,floor(w)-1) || goToEdge(parts[i].y,0,floor(h)-1)) {
                        startupBool=true;
                    }
                    /*parts[i].x=goToEdge(parts[i].x,0,floor(w)-1);
                    parts[i].y=goToEdge(parts[i].y,0,floor(h)-1);*/
                }else{
                    parts[i].oldX=parts[i].x;
                    parts[i].oldY=parts[i].y;
                    parts[i].x=parts[i-1].oldX;
                    parts[i].y=parts[i-1].oldY;
                    if(parts[i].x==parts[0].x && parts[i].y==parts[0].y) {
                        startupBool=true;
                    }
                }
                if(parts[i].x==pickupX && parts[i].y==pickupY) {
                    pickupX=floor(random(0,w-1));
                    pickupY=floor(random(0,h-1));
                    points++;
                    var pl=parts.length;
                    parts[pl]=new Part(parts[pl-1].oldX,parts[pl-1].oldY);
                }
            }
            parts[i].show();
        }
        fill(255);
        text(points,width/2,height/20);
    }else{
        if(dead%10<5) {
            setbackground(255,0,0);
        }else{
            setbackground(0,0,0);
        }
        dead--;
    }
    if(startupBool) {
        startup();
    }
}
function Part(x,y) {
    this.x=x;
    this.y=y;
    this.oldX=x;
    this.oldY=y;
    this.show=() => {
        fill(255);
        rect(this.x*partSize+xPlus,this.y*partSize,partSize,partSize);
    }
}
function movePlayer() {
    if(keyIsPressed) {
        if((key.toLowerCase()=="a" || key=="ArrowLeft") && !(dirX==1 && dirY==0)) {
            dirX=-1;
            dirY=0;
        }
        if((key.toLowerCase()=="d" || key=="ArrowRight") && !(dirX==-1 && dirY==0)) {
            dirX=1;
            dirY=0;
        }
        if((key.toLowerCase()=="w" || key=="ArrowUp") && !(dirX==0 && dirY==1)) {
            dirX=0;
            dirY=-1;
        }
        if((key.toLowerCase()=="s" || key=="ArrowDown") && !(dirX==0 && dirY==-1)) {
            dirX=0;
            dirY=1;
        }
    }
}
function goToEdge(i,mi,ma) {
    var val=false;
    if(i<mi) {
        val=true;
    }
    if(i>ma) {
        val=true;
    }
    return val;
}
function startup() {
    dead=20;
    dirX=1;
    dirY=0;
    parts=[];
    points=0;
    textAlign(CENTER, CENTER);
    textSize(height/20);
    partSize=height/20;
    w=floor(width/partSize);
    h=height/partSize;
    parts[0]=new Part(floor(w/2),floor(h/2));
    parts[1]=new Part(floor(w/2),floor(h/2));
    parts[2]=new Part(floor(w/2),floor(h/2));
    pickupX=floor(random(0,w-1));
    pickupY=floor(random(0,h-1));
    xPlus=(width-w*partSize)/2
}
function setbackground(r,g,b) {
    fill(r,g,b);
    rect(xPlus,0,w*partSize,height);
}
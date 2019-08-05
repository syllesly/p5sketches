var minX, maxX, minY, maxY;
var oldminX, oldmaxX, oldminY, oldmaxY;
var xSl, ySl, zSl;
function setup() {
    createCanvas(window.innerWidth,window.innerHeight);
    pixelDensity(1);
    minX=createSlider(-2.5,0,-2, 0.01);
    minX.position(10,10);
    maxX=createSlider(0,2.5,2, 0.01);
    maxX.position(10,30);
    minY=createSlider(-2.5,0,-2, 0.01);
    minY.position(10,50);
    maxY=createSlider(0,2.5,2, 0.01);
    maxY.position(10,70);
    console.log(width*height*100);
}
function draw() {
    if(oldminX!=minX.value() || oldmaxX!=maxX.value() || oldminY!=minY.value() || oldminY!=minX.value()) {
        loadPixels();
        for(var x=0;x<width;x++) {
            for(var y=0;y<height;y++) {
                var n=0;
                var a=map(x,0,width,minX.value(),maxX.value());
                var b=map(y,0,height,minY.value(),maxY.value());
                var olda=a;
                var oldb=b;
                for(;n<100;) {
                    var aa=a*a-b*b;
                    var bb=2*a*b;
                    a=aa+olda;
                    b=bb+oldb;
                    if(abs(a+b)>16) {
                        break;
                    }
                    n++;
                }
                var c=map(n,0,100,0,255);
                var p=(x+y*width)*4;
                pixels[p]=c;
                pixels[p+1]=c;
                pixels[p+2]=c;
                pixels[p+3]=255;
            }
        }
        updatePixels();
        oldminX=minX.value();
        oldmaxX=maxX.value();
        oldminY=minY.value();
        oldmaxY=maxY.value();
    }
}
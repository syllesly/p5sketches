function setup() {
    createCanvas(window.innerWidth,window.innerHeight);
    
}
function draw() {
    background(0);
    fill(255);
    noStroke();
    var h=hour();
    var m=minute();
    var s=second();
    for(var i=0;i<12;i++) {
        push();
        translate(width/2,height/2);
        rotate(i*TWO_PI/12);
        rect(-4,-115,8,-25);
        pop();
    }
    push();
    translate(width/2,height/2);
    rotate(h*TWO_PI/12+m*TWO_PI/720);
    rect(-5,5,10,-100);
    pop();
    push();
    translate(width/2,height/2);
    rotate(m*TWO_PI/60+s*TWO_PI/3600);
    rect(-2,2,4,-100);
    pop();
    push();
    translate(width/2,height/2);
    rotate(s*TWO_PI/60);
    rect(-1.5,1.5,3,-110);
    pop();
    noFill();
    strokeWeight(5);
    stroke(255);
    ellipse(width/2,height/2,280);
}
var system;

var Lines = function(point1, length){

    line(30, 20, 85, 75);  

    line( 100, 100, 100 + 50*sin(45), 100 + 50*cos(45));
    //line( this.point2.x, this.point2.y, this.point3.x, this.point3.y );
    //line( this.point3.x, this.point3.y, this.point1.x, this.point1.y );

       
}


function setup(){
    var canvas = createCanvas(600,600);
    canvas.parent('mysketch');
    //line(30, 20, 85, 75);    
    stroke(255);
//    lines = new Lines(createVector(100,100),10);
    noLoop();
}

function draw(){
    background(0);
    lines = new Lines(createVector(100,100),50);
}

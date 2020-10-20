var hr, min, sec;
var hAngle, mAngle, sAngle;

function setup() {
  createCanvas(500, displayHeight - 100);
  angleMode(DEGREES);  
}

function draw() {
  background("black");

  //Translation and rotation 
  translate(200,200);
  rotate(-90);

  //Calculating time using predefined func from p5.js
  hr = hour();
  min = minute();
  sec = second();

  //To create ab iterative rotation
  hAngle = map(hr % 12, 0, 12, 0, 360);
  mAngle = map(min, 0, 60, 0, 360);
  sAngle = map(sec, 0, 60, 0, 360);

  //rotate the hand based on angle calculated
  //drawing hour hand
  push();

  rotate(hAngle);
  stroke(0,0,255);
  strokeWeight(7);
  line(0,0,50,0);
  
  pop();

  //drawing mins hand
  push();

  rotate(mAngle);
  stroke(0,255,0);
  strokeWeight(7);
  line(0,0,75,0);
  
  pop();

  //drawing seconds hand
  push();

  rotate(sAngle);
  stroke(255,0,0);
  strokeWeight(7);
  line(0,0,100,0);
  
  pop();

  stroke(255,0,255);
  point(0,0)

  //drawing the arcs
  strokeWeight(10);
  noFill();

  //Hour
  stroke(0,0,255);
  arc(0,0,260,260,0,hAngle);

  //Minutes
  stroke(0,255,0);
  arc(0,0,280,280,0,mAngle);

  //Seconds
  stroke(255,0,0);
  arc(0,0,300,300,0,sAngle);
}
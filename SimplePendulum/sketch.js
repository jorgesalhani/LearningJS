let angle;
let bob;
let len;
let origin;
let gravity = 1;

let angleV = 0;
let angleA = 0;

function setup() {
  createCanvas(600, 400);
  origin = createVector(300, 0);
  angle = PI/4;
  bob = createVector();
  len = 300;

  let createCanva = createCanvas(600, 800)
  createCanva

}

function draw() {
  background(0);
  
  let force = - gravity * sin(angle);
  
  angleA = force / len;
  angleV += angleA;
  angle += angleV;

  
  bob.x = len * sin(angle) + origin.x;
  bob.y = len * cos(angle) + origin.y;
  
  stroke(255);
  strokeWeight(5);
  line(origin.x, origin.y, bob.x, bob.y);
  fill(150);
  circle(bob.x, bob.y, 64);
}
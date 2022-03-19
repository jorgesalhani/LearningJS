
let angle = 0;
let radius = 50;

function setup() {
  createCanvas(400, 400);
  background(20);

  stroke(255);
  strokeWeight(0.5);
  line(50, 20, 50, 160);
  line(50, 90, 350, 90);
}

function draw() {
  stroke(255);
  noFill();
  ellipse(width / 2, (3 * height / 4) - 20, 3, 3);

  let x = radius * sin(angle);
  let y = radius * cos(angle);

  
  point(
    width / 2 + x, 
    (3 * height / 4) - 20 + y
  );

  angle += PI/100;

  point(50+((angle * 20))%(PI*100), y+90);
}
let xoff1 = 0;
let xoff2 = 10000;
var inc = 0.01;
let start = 0;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(50);

  let xoff = start;

  stroke(255);
  noFill();
  beginShape();
  
  for (let x = 0; x < width; x++) {
    stroke(255);
    // let y = random(height);
    let y = noise(xoff)*height;
    vertex(x, y);
    xoff += inc;
  }
  endShape();

  start += inc;


  // var x = map(noise(xoff1), 0, 1, 0, width);
  // var y = map(noise(xoff2), 0, 1, 0, width);
  // xoff1 += 0.01;
  // xoff2 += 0.01;


  // ellipse(x, y, 40, 40);
  // noLoop();
}

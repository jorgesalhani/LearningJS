let xoff = 0;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(150);

  var x = map(noise(xoff), 0, 1, 0, width);
  xoff += 0.01;
  ellipse(x, 200, 40, 40);
}

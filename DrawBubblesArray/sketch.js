let bubbles = [];

function setup() {
  createCanvas(400, 400);
  for (let i = 0; i < 50; i++) {
    let x = random(width);
    let y = random(height);
    let r = random(10, 40);
    bubbles[i] = new Bubble(x, y, r);
  }
}

function draw() {
  background(0);

  // for (let bubble of bubbles) {
  //   bubble.move();
  //   bubble.show();
  // }
  
  for (let i = 0; i < bubbles.length; i++) {
    bubbles[i].move();
    bubbles[i].show();
  }
}

function mousePressed() {
  let r = random(10, 50);
  let b = new Bubble(mouseX, mouseY, r);
  bubbles.push(b);
}

class Bubble {
  constructor(x, y, r) {
    this.x = x,
    this.y = y
    this.r = r
  }

  move() {
    this.x = this.x + random(-5, 5);
    this.y = this.y + random(-5, 5);
  }

  show() {
    noStroke()
    fill(255, 10);
    ellipse(this.x, this.y, this.r * 2);
  }
}
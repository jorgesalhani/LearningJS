function pixelsToFloat(pixelsMetric) {
  let pixelsValue = pixelsMetric.match(/\d+/g);
  return parseFloat(pixelsValue);
}

let width = pixelsToFloat(d3.select('svg').style('width'));
let heigth = pixelsToFloat(d3.select('svg').style('height'));


let svg = d3.select('svg g');

svg
  .attr('transform', `translate(${width / 4}, 100)`)
  .append('rect')
  .attr('width', width / 2)
  .attr('height', 200)
  .attr('fill', 'white')
  .attr('stroke', 'black');

let r = 10
svg
  .append('circle')
  .attr('r', r)
  .attr('cx', width / 4)
  .attr('cy', 100);


let circle = d3.select('circle');

let circlePositions = [{
  x: pixelsToFloat(circle.style('cx')),
  y: pixelsToFloat(circle.style('cy'))
}]

function updatePositions() {
  circlePositions = [];
  circle = d3.selectAll('circle');
  circlePositions.push({
    x: pixelsToFloat(circle.style('cx')),
    y: pixelsToFloat(circle.style('cy'))
  })
}

console.log(width);
console.log(heigth);

let dt = 1;
let vx = 2, vy = 2;

function wallCollision(currentX, currentY) {
  let nextPositionX = currentX + vx * dt;
  let nextPositionY = currentY + vy * dt;
  if (nextPositionY <= r || nextPositionY >= (heigth / 2) - r) {
    let incidentAngle = Math.atan2(nextPositionX, nextPositionY);
    vy *= -1;
    nextPositionY = currentY + (vy * dt) * Math.sin(incidentAngle);
  }
  if (nextPositionX <= r || nextPositionX >= (width / 2) - r) {
    let incidentAngle = Math.atan2(nextPositionX, nextPositionY);
    vx *= -1;
    nextPositionX =  currentX + (vx * dt) * Math.cos(incidentAngle);
  }
  return {
    x: nextPositionX, 
    y: nextPositionY
  }
}

function moveCircle() {
  let nextPositions = wallCollision(circlePositions[0].x, circlePositions[0].y);
  d3.selectAll('circle')
    .data(circlePositions)
    .join('circle')
    .attr('cx', nextPositions.x)
    .attr('cy', nextPositions.y);
}

let interval = d3.interval(function(elapsed) {
  // if (elapsed > 3000) {
  //   interval.stop();
  //   return;
  // }
  updatePositions();
  moveCircle();
}, 1);
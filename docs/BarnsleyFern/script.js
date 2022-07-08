function pixelsToFloat(pixelsMetric) {
  let pixelsValue = pixelsMetric.match(/\d+/g);
  return parseFloat(pixelsValue);
}

let width = pixelsToFloat(d3.select('svg').style('width'));
let heigth = pixelsToFloat(d3.select('svg').style('height'));


let svg = d3.select('g');

svg
  .attr('transform', `translate(${width / 4}, 300)`)

function drawCircle(cx, cy, r) {
  let mapX = d3.scaleLinear()
  .domain([-2.1820, 2.6558])
  .range([0, width / 2]);

  let mapY = d3.scaleLinear()
    .domain([0, 9.9983])
    .range([0, heigth / 2]);

  d3.select('g')
    .append('circle')
      .attr('cx', mapX(cx))
      .attr('cy', mapY(cy))
      .attr('r', r)
      .attr('fill', 'green');
}

function nextPoint(x, y) {
  let nextX, nextY = 0;

  let r = Math.random();

  if (r < 0.01) {
    nextX = 0;
    nextY = 0.16 * y;
  } else if (r < 0.86) {
    nextX = 0.85 * x + 0.04 * y;
    nextY = -0.04 * x + 0.85 * y + 1.6;
  } else if (r < 0.93) {
    nextX = 0.2 * x + -0.26 * y;
    nextY = 0.23 * x + 0.22 * y + 1.6;
  } else {
    nextX = -0.15 * x + 0.28 * y;
    nextY = 0.26 * x + 0.24 * y + 0.44;
  }

  return {
    x: nextX,
    y: nextY
  }
}

let newPositions = nextPoint(0, 0, 1);

let interval = d3.interval(function(elapse) {
  // if (elapse >= 10000) {
  //   interval.stop();
  //   return;
  // }
  drawCircle(newPositions.x, newPositions.y, 1);
  newPositions = nextPoint(newPositions.x, newPositions.y);
})
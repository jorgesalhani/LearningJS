const borders = {
  top: 30,
  bottom: 30,
  left: 30,
  right: 30
}

const svgDimensions = {
  width: 300,
  height: 250
}

const svg = d3
  .select('svg')
  .attr('width', svgDimensions.width)
  .attr('height', svgDimensions.height);

function drawCircle(cx, cy, r) {
  svg
    .append('circle')
      .attr('cx', cx)
      .attr('cy', cy)
      .attr('r', r)
      .attr('fill', 'green');
}

function nextPoint(x, y) {
  let nextX, nextY = 0;

  let r = Math.random(1);

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

drawCircle(svgDimensions.width / 2, svgDimensions.height / 2, 5);
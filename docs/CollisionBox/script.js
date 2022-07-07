function pixelsToFloat(pixelsMetric) {
  let pixelsValue = pixelsMetric.match(/\d+/g);
  return parseFloat(pixelsValue);
}

let width = pixelsToFloat(d3.select('svg').style('width'));

let svg = d3.select('svg g');

svg
  .attr('transform', `translate(${width / 4}, 100)`)
  .append('rect')
  .attr('width', width / 2)
  .attr('height', 200)
  .attr('fill', 'white')
  .attr('stroke', 'black');

svg
  .append('circle')
  .attr('r', 10)
  .attr('cx', width / 4)
  .attr('cy', 100);


let circle = d3.select('circle');

function moveCircle(circle, vx, vy) {
  let currentPositionX = pixelsToFloat(circle.style('cx'));
  circle.attr('cx', currentPositionX + vx);

  let currentPositionY = pixelsToFloat(circle.style('cy'));
  circle.attr('cy', currentPositionY + vy);

  circle
    .transition()
    .duration(500); 
}

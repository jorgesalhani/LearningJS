let data = [];

function random(x) {return Math.floor(Math.random() * x);}


function updateData() {
  data = [];
  for (let i = 0; i < 5; i++) {
    data.push({
      x: random(800),
      r: random(40),
      fill: d3.rgb(random(255), random(255), random(255))
    })
  }
}

function update() {
  d3.select('svg')
    .selectAll('circle')
    .data(data)
    .join('circle')
    .attr('cy', 50)
    .transition()
    .attr('r', function(d) {
      return d.r
    })
    .transition()
    .attr('cx', function(d, i) {
      return d.x;
    })
    .style('fill', function(d){
      return d.fill;
    })
}

function updateAll() {
  updateData();
  update();
}

updateAll();
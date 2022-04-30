const data = [
  {
    year: 2000,
    popularity: 50
  },
  {
    year: 2001,
    popularity: 150
  },
  {
    year: 2002,
    popularity: 200
  },
  {
    year: 2003,
    popularity: 130
  },
  {
    year: 2004,
    popularity: 240
  },
  {
    year: 2005,
    popularity: 380
  },
  {
    year: 2006,
    popularity: 420
  }
];

const svg = d3
  .select('#chart')
  .append('svg')
  .attr('height', 300)
  .attr('width', 600);

const margin = {
  top: 0,
  bottom: 20,
  left: 30,
  right: 20
};

const chart = svg
  .append('g')
  .attr('transform',
    `translate(${margin.left}, 0)`  
  );

const width = + svg.attr('width') - margin.left - margin.right;
const height = + svg.attr('height') - margin.top - margin.bottom;

const grp = chart
  .append('g')
  .attr('transform',
    `translate(-${margin.left},-${margin.top})`
  );

const yScale = d3
  .scaleLinear()
  .range([height, 0])
  .domain([0, d3.max(data, dataPoint => dataPoint.popularity)]);

const xScale = d3
  .scaleLinear()
  .range([0, width])
  .domain(d3.extent(data, dataPoint => dataPoint.year));


const line = d3
  .line()
  .x(dataPoint => xScale(dataPoint.year))
  .y(dataPoint => yScale(dataPoint.popularity));


const path = grp
  .append('path')
  .attr('transform', `translate(${margin.left}, 0)`)
  .datum(data)
  .attr('fill', 'none')
  .attr('stroke', 'steelblue')
  .attr('stroke-linejoin', 'round')
  .attr('stroke-linecap', 'round')
  .attr('stroke-width', 1.5)
  .attr('d', line);

const pathLength = path
  .node()
  .getTotalLength();

const transitionPath = d3 
  .transition()
  .ease(d3.easeSin)
  .duration(2500);

path
  .attr('stroke-dashoffset', pathLength)
  .attr('stroke-dasharray', pathLength)
  .transition(transitionPath)
  .attr('stroke-dashoffset', 0);

chart 
  .append('g')
  .attr('transform', `translate(0, ${height})`)
  .call(d3.axisBottom(xScale).ticks(data.length));

chart 
  .append('g')
  .attr('transform', `translate(0,0)`)
  .call(d3.axisLeft(yScale));

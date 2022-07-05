// Script guided by:
// http://bl.ocks.org/newby-jay/767c5ffdbbe43b65902f

function animation() {
  let gamma = 2, c = 10, dt = 0.005;

  let X0 = [], Y0 = [], X = [], Y = [];

  let xb = 1.5, yb = 1.3;

  let N = 50;
  let xp = d3.range(N).map(function(i) {
    return xb * (-1 + i * (2 / N));
  });

  let yp = d3.range(N).map(function(i) {
    return yb * (-1 + i * (2 / N));
  })

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      X.push(xp[j]); 
      Y.push(yp[i]);
      X0.push(xp[j]);
      Y0.push(yp[i]);
    }
  }

  function F(x, y) {
    let rho = Math.sqrt((x * x) + (y * y));
    let r = rho - 1;
    let a = gamma * (1 - rho * rho);
    let b = -gamma * c * r * r + 1;
    return [(x * a - b * y), (y * a + b * x)];
  }

  let width = 960, height = 500;
  let mw = 0; 
  let g = d3.select('canvas').node().getContext('2d');

  g.fillStyle = "rgba(0, 0, 0, 0.05)";
  g.lineWidth = 0.7;
  g.strokeStyle = "#FF8000";

  let xMap = d3.scaleLinear()
    .domain([-xb, xb])
    .range([mw, width - mw]);

  let yMap = d3.scaleLinear()
    .domain([-yb, yb])
    .range([height - mw, mw]);

  let animAge = 0, frameRate = 30;
  let M = X.length, maxAge = 100, age = [];

  function randage() {
    return Math.round(Math.random() * 100);
  }

  for (let i = 0; i < M; i++) {
    age.push(randage());
  }

  let drawFlag = true;

  d3.timer(function() {
    if (drawFlag) {
      draw();
    }
  }, frameRate);

  d3.select('canvas')
    .on('click', function() {
      drawFlag = (drawFlag) ? false: true;
    });

  g.globalCompositeOperation = 'source-over'
  function draw() {
    g.fillRect(0, 0, width, height);
    for (let i = 0; i < M; i++) {
      let dr = F(X[i], Y[i]);
      g.beginPath();
      g.moveTo(xMap(X[i]), yMap(Y[i]));
      g.lineTo(
        xMap(X[i] += dr[0] * dt),
        yMap(Y[i] += dr[1] * dt)
      );
      g.stroke();
      if (age[i]++ > maxAge) {
        age[i] = randage();
        X[i] = X0[i];
        Y[i] = Y0[i];
      }
    }
  }
}

animation();
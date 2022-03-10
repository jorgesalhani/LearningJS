var minval = -0.5;
var maxval = 0.5;

var minSlider;
var maxSlider;

function setup() {
  createCanvas(600, 600);

  pixelDensity(1);

  // minSlider = createSlider(-2.5, 0, -2.5, 0.01);
  // maxSlider = createSlider(0, 2.5, 2.5, 0.01);
}

function draw() {
  loadPixels();

  var maxIterations = 100;

  for (var x = 0; x < width; x++) {
    for (var y = 0; y < height; y++) {

      // var a = map(x, 0, width, minSlider.value(), maxSlider.value());
      // var b = map(y, 0, width, minSlider.value(), maxSlider.value());


      var a = map(x, 0, width, -1.5, 1.5);
      var b = map(y, 0, width, -1.5, 1.5);

      var ca = a;
      var cb = b

      var n = 0;

      while (n < maxIterations) {
        var aa = a*a - b*b;
        var bb = 2 * a * b;

        a = aa + ca;
        b = bb + cb;

        if (abs(a + b) > 40) {
          break;
        }

        n++;
      }

      var bright = map(n, 0, maxIterations, 0, 1);
      bright = map(sqrt(bright), 0, 1, 0, 255);
      if ( n === maxIterations) {
        bright = 0;
      }

      var pix = (x + y * width) * 4;
      pixels[pix + 0] = bright;
      pixels[pix + 1] = bright;
      pixels[pix + 2] = bright;
      pixels[pix + 3] = 255;
    }
  }

  updatePixels();
}

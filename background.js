let dim;
let color;
let dimension;

function setup() {
  createCanvas(windowWidth, windowHeight);
  dim = min(width, height);
  color = color(255, 100, 100);
  dimension = 50;
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function draw() {
  for (let i = 0; i < width; i = i + dimension) {
    for (let j = 0; j < height; j = j + dimension) {
      const color = random(colorList);
      noStroke();
      fill(color);
      drawSquare(i, j);
    }
  }
}

function drawSquare(x, y) {
  rect(x, y, dimension, dimension);
}

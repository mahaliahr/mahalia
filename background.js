let dim;
// let color;
let dimension;
let xCompress;
let yCompress;

function setup() {
  createCanvas(windowWidth, windowHeight);
  dim = min(width, height);
  // colour = color(255, 100, 100);
  dimension = 50;
  // xCompress = mouseX;
  // yCompress = mouseY;
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function draw() {
  for (let i = 0; i < width; i = i + dimension) {
    for (let j = 0; j < height; j = j + dimension) {
      xCompress = dimension/mouseX;
      yCompress = dimension/mouseY;
      //console.log(xCompress);
      noStroke();
      fill(color(255, 100, 100));
      rect(i, j, xCompress, yCompress);
      //drawSquare(i, j);
    }
  }
}
// squish square (x dimension based on mouseX, y dimension based on mouseY)
// function drawSquare(x, y) {
//   rect(x, y, dimension/mouseX, dimension);
//   // console.log(xCompress);
//   // console.log(yCompress);
// }

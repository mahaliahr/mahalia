let dim;
// let color;
let dimension;
let xCompress;
let yCompress;
let boxWidth;
let boxHeight;
let changeWidth;

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
  noStroke();
  // fill(color(252, 239, 239));
  fill(color(161, 252, 223)); 
  changeWidth = setInterval(() => {
    xCompress = mouseX / 10;
    console.log(xCompress);
    yCompress = mouseY / 10;
    boxWidth = dimension / 2;
    boxHeight = dimension / yCompress;
  },10000);


  for (let i = 0; i < width; i = i + dimension) {
    for (let j = 0; j < height; j = j + dimension) {
      drawSquare(i, j);

    }
  }
}
// squish square (x dimension based on mouseX, y dimension based on mouseY)
function drawSquare(x, y) {
  rect(x, y, boxWidth, boxHeight);
}

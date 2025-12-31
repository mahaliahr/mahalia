let images = [];
let i = 0;

// Load images from generated JSON
fetch('./assets/images.json')
  .then(response => response.json())
  .then(data => {
    images = data;
    console.log(`Loaded ${images.length} images`);
  })
  .catch(err => console.error('Error loading images:', err));

function placeImage(x, y) {
  if (images.length === 0) return; // wait for images to load
  
  const nextImage = images[i];

  const img = document.createElement("img");
  img.setAttribute("src", nextImage);
  // Use fixed positioning so images are relative to viewport, not container
  img.style.position = "fixed";
  img.style.left = x + "px";
  img.style.top = y + "px";
  img.style.transform = "translate(-50%, -50%) scale(0.5) rotate(" + (Math.random() * 20 - 10) + "deg)";
  img.style.zIndex = "2400"; // BELOW mask 
  i = i + 1;

  if (i >= images.length) {
    i = 0;
  }
  // Append to body instead of container so positioning is consistent
  document.body.appendChild(img);
}

document.addEventListener("click", function(event) {
  // Don't place image if clicking on a link or nav element
  if (event.target.tagName === 'A' || event.target.closest('nav')) {
    return; // let the link work normally
  }
  event.preventDefault();
  placeImage(event.pageX, event.pageY);
})

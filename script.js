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
  img.style.left = x + "px";
  img.style.top = y + "px";
  img.style.transform = "translate(-50%, -50%) scale(0.5) rotate(" + (Math.random() * 20 - 10) + "deg)"

  i = i + 1;

  if (i >= images.length) {
    i = 0;
  }
  document.getElementById('container').appendChild(img)
}

document.addEventListener('click', e => {
  if (e.pointerType === "mouse") {} // mouse event
  else {} // touch event
});

document.addEventListener("click", function(event) {
  // Don't place image if clicking on a link or nav element
  if (event.target.tagName === 'A' || event.target.closest('nav')) {
    return; // let the link work normally
  }
  event.preventDefault();
  placeImage(event.pageX, event.pageY)
})

// document.addEventListener("touchstart", function(event) {
//   // event.preventDefault();
//   placeImage(event.pageX, event.pageY)
// });

function ShowAndHide() {
  var x = document.getElementById("about-block");
  if (x.style.display == 'none') {
    x.style.display = 'block';
  } else {
    x.style.display = 'none';
  }
}

function isChrome() {
    var userAgent = navigator.userAgent;
    var isChrome = userAgent.indexOf('Chrome') > -1 && userAgent.indexOf('Edge') == -1 && userAgent.indexOf('OPR') == -1;
    return isChrome;
}

if (isChrome()) {
    var elements = document.querySelectorAll('.main-content');
    elements.forEach(function(el) {
        el.style.position = 'relative';
    });
}

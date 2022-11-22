const images = [
  "https://mmhr.s3.amazonaws.com/1_entrance.png",
  "https://mmhr.s3.amazonaws.com/2_explosion.png",
  "https://mmhr.s3.amazonaws.com/3_cyclico_mhr.jpg",
  "https://mmhr.s3.amazonaws.com/4_ThePlayground_keyimage_5.png",
  "https://mmhr.s3.amazonaws.com/5_ThePlayground_keyimage_3.jpeg",
  "https://mmhr.s3.amazonaws.com/6_hydra.png",
  "https://mmhr.s3.amazonaws.com/7_cyclico.png",
  "https://mmhr.s3.amazonaws.com/8_monads+in+game.gif",
  "https://mmhr.s3.amazonaws.com/9_ThePlayground-Chat-box-various.png",
  "https://mmhr.s3.amazonaws.com/10_hydra-code.jpeg",
  "https://mmhr.s3.amazonaws.com/11_ThePlayground_keyimage_6.gif",
  "https://mmhr.s3.amazonaws.com/12_ThePlayground_keyimage_8.png",
  "https://mmhr.s3.amazonaws.com/follow-avoid.gif"
];

let i = 0;

function placeImage(x, y) {
  const nextImage = images[i];

  const img = document.createElement("img");
  img.setAttribute("src", nextImage);
  img.style.left = x + "px";
  img.style.top = y + "px";
  img.style.transform = "translate(-50%, -50%) scale(0.5) rotate(" + (Math.random() * 20 - 10) + "deg)"

  document.body.appendChild(img);

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

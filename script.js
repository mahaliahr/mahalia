const images = [
  "./assets/main-page/1_entrance.png",
  "./assets/main-page/2_explosion.png",
  "./assets/main-page/3_cyclico_mhr.jpg",
  "./assets/main-page/4_ThePlayground_keyimage_5.png",
  "./assets/main-page/5_ThePlayground_keyimage_3.jpeg",
  "./assets/main-page/6_hydra.png",
  "./assets/main-page/7_cyclico.png",
  "./assets/main-page/8_monads in game.gif",
  "./assets/main-page/9_ThePlayground-Chat-box-various.png",
  "./assets/main-page/10_hydra-code.jpeg",
  "./assets/main-page/11_ThePlayground_keyimage_6.gif",
  "./assets/main-page/12_ThePlayground_keyimage_8.png",
  "./assets/main-page/13_follow-avoid.gif"
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

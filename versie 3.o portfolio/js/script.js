
console.log("gello");

var cbtn = document.querySelector(".cbtn");
var overlay = document.querySelector(".overlay");
var closeBtn = document.querySelector(".close-btn");



function overlayOn() {

  overlay.classList.toggle("active");


}

// cbtn.addEventListener('click', overlayOn, false);
cbtn.addEventListener('click', overlayOn, false);
closeBtn.addEventListener('click', overlayOn, false);

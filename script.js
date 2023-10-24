const leftBtn = document.querySelector(".left-btn");
const rightBtn = document.querySelector(".right-btn");
const slider = document.querySelector(".cert");
let slideQty = 0;
function moveLeft() {
  if (slideQty === 0) {
    slideQty = 800;
    slider.style.marginLeft = -slideQty + "px";
  } else {
    slideQty -= 400;
    slider.style.marginLeft = -slideQty + "px";
  }
}

function moveRight() {
  if (slideQty === 800) {
    slideQty = 0;
    slider.style.marginLeft = -slideQty + "px";
  } else {
    slideQty += 400;
    slider.style.marginLeft = -slideQty + "px";
  }
}
leftBtn.addEventListener("click", moveLeft);
rightBtn.addEventListener("click", moveRight);

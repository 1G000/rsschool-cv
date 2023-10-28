const leftBtn = document.querySelector(".left-btn");
const rightBtn = document.querySelector(".right-btn");
const slider = document.querySelector(".projects");
let slideQty = 0;
const burgerMenuBtn = document.querySelector(".burger-menu-icon");
const line = document.querySelector(".line");
const burgerMenu = document.querySelector(".burger-menu");
const backDrop = document.querySelector(".backdrop");
const links = document.querySelectorAll(".nav-link-burger");

burgerMenuBtn.addEventListener("click", () => {
  burgerMenuBtn.classList.toggle("active");
  burgerMenu.classList.toggle("burger-menu-open");
  backDrop.classList.toggle("is-hidden");
});

function toggleBackDrop() {
  backDrop.classList.toggle("is-hidden");
  burgerMenuBtn.classList.toggle("active");
  burgerMenu.classList.toggle("burger-menu-open");
}

links.forEach((link) => link.addEventListener("click", toggleBackDrop));

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

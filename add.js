let searchBtn = document.querySelector("#search-btn");
let searchform = document.querySelector(".search");
let loginform = document.querySelector(".login-form");
let menu = document.querySelector("#menu-bar");
let amenu = document.querySelector(".navbar");
let videoBtn = document.querySelectorAll(".video-btn");

function showbar() {
  searchBtn.classList.toggle("fa-times");
  searchform.classList.toggle("active");
}
function showform() {
  loginform.classList.add("active");
}
function hideform() {
  loginform.classList.remove("active");
}
function showmenu() {
  menu.classList.toggle("fa-times");
  amenu.classList.toggle("active");
}
videoBtn.forEach((slide) => {
  slide.addEventListener("click", function () {
    document.querySelector(".controls .blue").classList.remove("blue");
    slide.classList.add("blue");
    let change = slide.getAttribute("data-src");
    document.querySelector("#video-slider").src = change;
  });
});
var swiper = new Swiper(".review-slider", {
  spaceBtween: 20,
  loop: true,
  autoplay: {
    delay: 2500,
  },
});

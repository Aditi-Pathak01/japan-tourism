let title = document.querySelector("#page-1 h1 span");
let nav = document.querySelector("nav");
let backToTop = document.querySelector("#page-1 i");

document.addEventListener("DOMContentLoaded", () => {
  title.style.transform = "translateY(20px)";
});

document.addEventListener("scroll", () => {
  if (scrollY > 300) {
    nav.classList.add("nav-scroll");
    nav.childNodes[3].innerHTML = "<i class='ri-menu-add-fill'></i>Menu";
    backToTop.style.opacity = "1";
  } else {
    nav.classList.remove("nav-scroll");
    nav.childNodes[3].innerText = "Home";
    backToTop.style.opacity = "0";
  }
});
backToTop.addEventListener("click", () => {
  document.documentElement.scrollTop = 0;
});

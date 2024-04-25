let title = document.querySelector("#page-1 h1 span");
let nav = document.querySelector("nav");
let backToTop = document.querySelector("#page-1 i");
let navScroll = document.querySelector("#nav-scroll");

document.addEventListener("DOMContentLoaded", () => {
  title.style.transform = "translateY(20px)";
});

document.addEventListener("scroll", () => {
  if (scrollY > 0) {
    nav.style.opacity = "0";
    backToTop.style.opacity = "1";
    navScroll.style.transform = "translate(-50%) scale(1)"
  } else {
    nav.style.opacity = "1";
    backToTop.style.opacity = "0";
    navScroll.style.transform = "translate(-50%) scale(0)"
  }
});
backToTop.addEventListener("click", () => {
  document.documentElement.scrollTop = 0;
});
let click = 0
navScroll.addEventListener("click",()=>{
  if(click ===0){
    navScroll.innerHTML = ""
    navScroll.style.height = "20vh"
    navScroll.style.width = "40vw"
    click = 1
  } else {
    navScroll.innerHTML = '<i class="ri-menu-add-line"></i><span>Menu</span>'
    navScroll.style.height = "8vh"
    navScroll.style.width = "10vw"
    click = 0
  }
})
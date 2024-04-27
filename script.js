let title = document.querySelector("#title");
let nav = document.querySelector("nav");
let backToTop = document.querySelector("#top-btn");
let navScroll = document.querySelector("#nav-scroll");
let hoverElems = document.querySelectorAll(".elem");
let hoverElemsH = document.querySelectorAll(".elem-h");
let culture2Items = document.querySelectorAll(".item");

//loading animation
document.addEventListener("DOMContentLoaded", () => {
  var tl = gsap.timeline();
  tl.from("#page-1", {
    scale: 0,
    duration: 1.8,
  });
  tl.from(nav, {
    scale: 0,
    duration: 1,
  });
  tl.to("#title", {
    y: 20,
  });
});
//nav animation
document.addEventListener("scroll", () => {
  if (scrollY > 0) {
    gsap.to(nav, {
      opacity: 0,
    });
    gsap.to(backToTop, {
      opacity: 1,
    });
    gsap.to(navScroll, {
      scale: 1,
    });
  } else {
    gsap.to(nav, {
      opacity: 1,
    });
    gsap.to(backToTop, {
      opacity: 0,
    });
    gsap.to(navScroll, {
      scale: 0,
    });
  }
});
//Top btn animation
backToTop.addEventListener("click", (scrollX) => {
  document.documentElement.scrollTop = 0;
});
//NacOn Scroll Animation :-click
navScroll.addEventListener("click", () => {
  gsap.to(navScroll, {
    height: "40vh",
    width: "20vw",
  });
  let clutter =
    "<div class=menu-opts><a>Culture</a><a>Destination</a><a>Food</a><a>NightLife</a><a>Accomodation</a></div>";
  navScroll.innerHTML = clutter;

  let culture = navScroll.childNodes[0].childNodes[0];
  culture.addEventListener("click", () => {
    culture.setAttribute("href", "#page-3");
  });
});
//NacOn Scroll Animation :-Mouse leave
navScroll.addEventListener("mouseleave", () => {
  gsap.to(navScroll, {
    height: "8vh",
    width: "10vw",
  });
  navScroll.innerHTML = '<i class="ri-menu-add-line"></i><span>Menu</span>';
});

//page-2 Animation

//page3 animation:-cursor
hoverElemsH.forEach((elem) => {
  elem.addEventListener("mouseenter", () => {
    gsap.to(elem.childNodes[3], {
      scale: 1,
    });
  });

  elem.addEventListener("mousemove", (dets) => {
    gsap.to(elem.childNodes[3], {
      x: dets.x - elem.getBoundingClientRect().x + "px",
      y: dets.y - elem.getBoundingClientRect().y - 40 + "px",
    });
  });

  elem.addEventListener("mouseleave", () => {
    gsap.to(elem.childNodes[3], {
      scale: 0,
    });
  });
  hoverElemsH[0].style.marginTop = "4vh";
});
//page3 animation:-scroll
function handlePage3() {
  for (var i = 0; i < hoverElems.length; i++) {
    let windowH = window.innerHeight;
    let rectTop = hoverElems[i].getBoundingClientRect().y;
    if (rectTop < windowH - 120) {
      gsap.to(hoverElems[i], {
        x: 0,
        duration: 1.8,
        stagger: 4,
      });
    }
  }
}
window.addEventListener("scroll", handlePage3);



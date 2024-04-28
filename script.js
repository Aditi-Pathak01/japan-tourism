let title = document.querySelector("#title");
let nav = document.querySelector("nav");
let backToTop = document.querySelector("#top-btn");
let navScroll = document.querySelector("#nav-scroll");
let hoverElems = document.querySelectorAll(".elem");
let hoverElemsH = document.querySelectorAll(".elem-h");
let culture2Items = document.querySelectorAll(".item");
let rediscover = document.querySelector("#rediscover");
let tBox = document.querySelector(".t-box");
let festivalSec = document.querySelector("#festival-sec");

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

//Nav-On Scroll Animation :-click
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
  let destination = navScroll.childNodes[0].childNodes[1];
  destination.addEventListener("click", () => {
    destination.setAttribute("href", "#destinations");
  });
});
//NavOn Scroll Animation :-Mouse leave
navScroll.addEventListener("mouseleave", () => {
  gsap.to(navScroll, {
    height: "8vh",
    width: "10vw",
  });
  navScroll.innerHTML = '<i class="ri-menu-add-line"></i><span>Menu</span>';
});

//page-2 Animation

//page3-collage animation
culture2Items.forEach((item) => {
  item.addEventListener("mousemove", () => {
    gsap.to(item, {
      y: -5,
      duration: 1,
    });
    gsap.to(item.childNodes[1], {
      bottom: "60%",
      opacity: 1,
      duration: 1.2,
    });
  });

  item.addEventListener("mouseleave", () => {
    gsap.to(item.childNodes[1], {
      bottom: 0,
      opacity: 0,
    });
  });
});

//page4(part-1)animation:-custom curser
rediscover.addEventListener("mouseenter", () => {
  gsap.to(rediscover.childNodes[3], {
    scale: 1,
  });
});
rediscover.addEventListener("mousemove", (dets) => {
  gsap.to(rediscover.childNodes[3], {
    left: dets.x - 130,
    top: dets.y - 180,
  });
  gsap.to(rediscover.childNodes[5], {
   scale :1,
   duration : 0.5
  });
});
rediscover.addEventListener("mouseleave", () => {
  gsap.to(rediscover.childNodes[3], {
    scale: 0,
  });
});




//page4(part-2) animation:-reveal on scroll
function handlePage3() {
  for (var i = 0; i < hoverElems.length; i++) {
    let windowH = window.innerHeight;
    let rectTop = hoverElems[i].getBoundingClientRect().y;
    if (rectTop < windowH - 50) {
      gsap.to(hoverElems[i], {
        y: 0,
        opacity: 1,
        duration: 1.9,
        stagger: 1,
      });
    }
  }
  hoverElems[2].style.marginTop = "5vh";
}
window.addEventListener("scroll", handlePage3);

//page4 (part-2)animation:-cursor on mousemove
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
});

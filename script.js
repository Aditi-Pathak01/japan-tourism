let title = document.querySelector("#title");
let nav = document.querySelector("nav");
let backToTop = document.querySelector("#top-btn");
let navScroll = document.querySelector("#nav-scroll");
let hoverElems = document.querySelectorAll(".elem");
let culture2Items = document.querySelectorAll(".item");
let rediscover = document.querySelector("#rediscover");
let rediscoverH1 = document.querySelector("#rediscover h1");
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
    destination.setAttribute("href", "#rediscover");
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

//page4(part-1)animation:-custom curser:-
let imgArr = [
  {
    src: "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dG9reW98ZW58MHx8MHx8fDA%3D",
  },
  {
    src: "https://images.unsplash.com/photo-1584005679717-7dda5e88bb52?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8c2FwcG9yb3xlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    src: "https://images.unsplash.com/photo-1491884592576-38221bd4314a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8b3Nha2F8ZW58MHx8MHx8fDA%3D",
  },
  {
    src: "https://images.unsplash.com/photo-1582167654023-21e3dc0204d1?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bmFnb3lhfGVufDB8fDB8fHww",
  },
  {
    src: "https://images.unsplash.com/photo-1579085474382-a87df1990fb0?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fG9zYWthfGVufDB8fDB8fHww",
  },
  {
    src: "https://images.unsplash.com/photo-1539648927287-2494ae5fdbf5?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHNhcHBvcm98ZW58MHx8MHx8fDA%3D",
  },
  {
    src: "https://images.unsplash.com/photo-1624253321171-1be53e12f5f4?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8a3lvdG98ZW58MHx8MHx8fDA%3D",
  },
];

rediscover.addEventListener("mouseenter", () => {
  gsap.to(rediscover.childNodes[3], {
    scale: 1,
  });
});
rediscover.addEventListener("mousemove", (dets) => {
  gsap.to(rediscover.childNodes[3], {
    left: dets.x - 80 + "px",
    top: dets.y - 260 +  "px"
  });
});
rediscover.addEventListener("mouseleave", () => {
  gsap.to(rediscover.childNodes[3], {
    scale: 0,
  });
});

const throttleFunction = (func, delay) => {
  //step-1 create a throttle function
  // Previously called time of the function
  let prev = 0;
  return (...args) => {
    // Current called time of the function
    let now = new Date().getTime();

    // Logging the difference
    // between previously
    // called and current called timings

    // If difference is greater
    // than delay call
    // the function again.
    if (now - prev > delay) {
      prev = now;

      // "..." is the spread
      // operator here
      // returning the function with the
      // array of arguments
      return func(...args);
    }
  };
};

let throttledMouseMove = throttleFunction((event) => {
  let div = document.createElement("div");
  div.classList.add("img-div");
  div.style.left = event.clientX - 500 + "px";
  div.style.top = event.clientY - 650 + "px";
  let randomIndex = Math.floor(Math.random() * imgArr.length);
  let img = document.createElement("img");
  img.src = imgArr[randomIndex].src;
  div.appendChild(img);
  rediscover.childNodes[1].appendChild(div);
  gsap.to(img, {
    y: 0,
    duration: 0.8,
    onComplete: () => {
      gsap.to(img, {
        y: 500,
      });
    },
  });

}, 150);

rediscover.childNodes[1].addEventListener("mousemove", throttledMouseMove);
rediscover.childNodes[1].addEventListener("mouseleave", ()=>{
  rediscoverH1.innerHTML = "<h1>Rediscover Japan</h1>"
});






//page4(part-2) animation:-reveal on scroll
function handlePage3() {
  for (var i = 0; i < hoverElems.length; i++) {
    let windowH = window.innerHeight;
    let rectTop = hoverElems[i].getBoundingClientRect().y;
    if (rectTop < windowH - 40) {
      gsap.to(hoverElems[i], {
        y: 0,
        opacity: 1,
        duration: 1.9,
        stagger: 1,
      });
    }
  }
}
window.addEventListener("scroll", handlePage3);

//page4 (part-2)animation:-cursor on mousemove
hoverElems.forEach((elem) => {
  elem.addEventListener("mouseenter", () => {
    gsap.to(elem.childNodes[5], {
      scale: 1.5,
    });
    gsap.to(elem.childNodes[3], {
      y: 0,
      duration: 1,
    });
  });

  elem.addEventListener("mousemove", (dets) => {
    gsap.to(elem.childNodes[5], {
      x: dets.x - elem.getBoundingClientRect().x + "px",
      y: dets.y - elem.getBoundingClientRect().y - 100 + "px",
    });
    gsap.to(elem, {
      height: "25vh",
    });
  });

  elem.addEventListener("mouseleave", () => {
    gsap.to(elem.childNodes[5], {
      scale: 0,
    });
    gsap.to(elem.childNodes[3], {
      y: 1000,
      duration: 1,
    });

    gsap.to(elem, {
      height: "17vh",
    });
  });
});

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
let page6 = document.querySelector("#page-5");

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
  if (scrollY > 100) {
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
navScroll.addEventListener("mouseenter", () => {
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
  let food = navScroll.childNodes[0].childNodes[2];
  food.addEventListener("click", () => {
    food.setAttribute("href", "#food");
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

/*//page-2 Animation:-*/

gsap.to(".first-elem", {
  scrollTrigger: {
    trigger: "#page-2",
    pin: true,
    start: "top top",
    end: "bottom bottom",
    endTrigger: ".last",
    scrub: 1,
  },
  y: "-300%",
  ease: "slow(0.7,0.7,false)",
  duration: 2.5,
});

gsap.from(".para", {
  opacity: 0,
  y: 70,
  scrollTrigger: {
    trigger: "#page-2",
    scroller: "body",
    start: "top 80%",
    end: "bottom 40%",
    scrub: 1,
  },
});

/*Page-3*/
let target = document.querySelector("#page-3");
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      gsap.from("#p3-right h1", {
        y: 10,
        opacity: 0,
        stagger: -1,
        delay: 0.4,
        duration: 0.3,
      });
    }
  });
});
observer.observe(target);

/*let videoSec = document.querySelector("#video-sec");
let img = document.querySelector("#video-sec img");
let video = document.querySelector("#video-sec video");
videoSec.addEventListener("mousemove", () => {
  gsap.to(img, {
    opacity: 0,
  });
  gsap.to(video, {
    opacity: 1,
  });
  video.play();
});
videoSec.addEventListener("mouseleave", () => {
  gsap.to(img, {
    opacity: 1,
  });
  gsap.to(video, {
    opacity: 0,
  });
  video.load();
});*/

//page4-collage animation
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

//page5 heading-
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
  {
    src: "https://plus.unsplash.com/premium_photo-1661902398022-762e88ff3f82?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Ginza-WAKO_at_night.jpg/1200px-Ginza-WAKO_at_night.jpg",
  },
  {
    src: "https://images.unsplash.com/photo-1580637400709-77d4b4afd10b?q=80&w=2448&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    src: "https://images.unsplash.com/photo-1565096321437-ef15676e528f?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    src: "https://images.unsplash.com/photo-1492571350019-22de08371fd3?q=80&w=2853&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    src: "https://images.unsplash.com/photo-1629725593792-727bbe2255b2?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    src: "https://images.unsplash.com/photo-1626911635167-0b3006fbda39?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    src: "https://images.unsplash.com/photo-1610957386297-3755fa76d011?q=80&w=2835&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    src: "https://wherewouldyougo.com/wp-content/uploads/2016/12/flower-field-Hokkaido-Japan.jpg",
  },
  {
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfFnBg-7Z-IwnhNKrNkZrYt-wZz8746WtXSq37ndn2XA&s",
  },
  {
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1sLZWtudk_VPUXJknpg1Dejzohzk8DK-hqaSVq-IilVi_Gz1P9rv9CtZM2fRE7WKvMRg&usqp=CAU",
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
    top: dets.y - 140 + "px",
    duration: 0.8,
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
  div.style.top = event.clientY - 600 + "px";
  let randomIndex = Math.floor(Math.random() * imgArr.length);
  let img = document.createElement("img");
  img.src = imgArr[randomIndex].src;
  div.appendChild(img);
  rediscover.childNodes[1].appendChild(div);
  gsap.to(img, {
    y: 0,
    duration: 1,
    ease: "back.out(1.7)",
    onComplete: () => {
      gsap.to(img, {
        y: 500,
      });
    },
  });
}, 250);

rediscover.childNodes[1].addEventListener("mousemove", throttledMouseMove);
rediscover.childNodes[1].addEventListener("mouseleave", () => {
  rediscoverH1.innerHTML = "<h1>Rediscover Japan</h1>";
});

//page5 content animation:-
gsap.from(".elem", {
  x: -200,
  opacity: 0,
  duration: 0.7,
  stagger: 1,
  scrollTrigger: {
    trigger: ".elem",
    scroller: "body",
    start: "top 80%",
    end: "top 40%",
  },
});

hoverElems.forEach((elem) => {
  elem.addEventListener("mouseenter", () => {
    gsap.to(elem.childNodes[5], {
      scale: 1.2,
    });
  });

  elem.addEventListener("mousemove", (dets) => {
    gsap.to(elem.childNodes[5], {
      x: elem.getBoundingClientRect().width - 150 + "px",
      y: dets.y - elem.getBoundingClientRect().y - 100 + "px",
    });
    gsap.to(elem, {
      height: "22.4vh",
    });
  });

  elem.addEventListener("mouseleave", () => {
    gsap.to(elem.childNodes[5], {
      scale: 0,
    });
    gsap.to(elem, {
      height: "17vh",
    });
  });
});
/**page-6 -FOOD section*/
//heading
let food = document.querySelector("#food");
let span = document.querySelectorAll("#food span");
food.childNodes[1].addEventListener("mouseenter", () => {
  span.forEach((spn) => {
    gsap.to(spn, {
      rotateY: 320,
      duration: 1,
    });
  });
});
//animate when p6 isinthe viewport
let target6 = food;
const observer6 = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      for (var i = 0; i < span.length; i++) {
        if (i % 2 === 0) {
          gsap.from(span[i], {
            rotate: 90,
            delay: 0.5,
            duration: 1.4,
            x: -100,
            opacity: 0,
          });
        } else {
          gsap.from(span[i], {
            rotate: 90,
            x: 500,
            delay: 0.5,
            duration: 1.4,
            opacity: 0,
          });
        }
      }
    }
  });
});
observer6.observe(target6);

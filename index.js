// toggle navbar
const nav_btn = document.querySelector('.menu-btn');
const a = document.querySelectorAll('.a');
const nav_btn2 = document.querySelector('.closebtn');
const menu = document.querySelector('.Header_menu');
menu.style.visibility = 'hidden';
nav_btn.addEventListener('click', () => {
  menu.style.visibility = 'visible';
  document.body.style.overflowY = (menu.classList.toggle("open")) ? 'hidden' : 'auto';
})

nav_btn2.addEventListener('click', () => {
  document.body.style.overflowY = (menu.classList.toggle("open")) ? 'hidden' : 'auto';
})


a.forEach(dets => {
  dets.addEventListener("click", () => {
    document.body.style.overflowY = (menu.classList.toggle("open")) ? 'hidden' : 'scroll';
  });
});


var tl = gsap.timeline();



// onhover arrow button 

const p = document.querySelectorAll(".p")
p.forEach(dets => {
  dets.addEventListener("mouseenter", () => {
    gsap.to(".arrow", {
      x: "1.5rem",
      scale: .6,
      duration: 0.3,
      ease:Expo,
    })
  })
  dets.addEventListener("mouseleave", () => {
    gsap.to(".arrow", {
      x: "0",
      scale: 1,
      duration: 0.3,
      ease:Expo,
    })
  })
});

/*dyor - landing page design */

// for hover effect
const dyor = document.querySelector('.dyor');
dyor.addEventListener('mouseenter', () => {
  gsap.to(".text1", {
    y: -100,
    opacity: 0,
    duration: 1,
  })
  gsap.to(".tx1", {
    y: 100,
    duration: 1,
  })
});

dyor.addEventListener('mouseleave', () => {
  gsap.to(".text1", {
    y: -10,
    opacity: 1,
    duration: 1,
  })
  gsap.to(".tx1", {
    y: 10,
    duration: 1,
  })
});

/* dial a crate - web design  */
const dial = document.querySelector('.dial');
// all additional classes add 
dial.addEventListener('mouseenter', () => {
  gsap.to(".text2", {
    y: -100,
    opacity: 0,
    duration: 1,
  })
  gsap.to(".tx2", {
    y: 100,
    duration: 1,
  })
});

// all additional classes remove

dial.addEventListener('mouseleave', () => {
  gsap.to(".text2", {
    y: -10,
    opacity: 1,
    duration: 1,
  })
  gsap.to(".tx2", {
    y: 10,
    duration: 1,
  })
});



/* fantasticcoder - web design */

// for hover effect
const fantasticcoder = document.querySelector('.fantasticcoder');
// all additional classes add 
fantasticcoder.addEventListener('mouseenter', () => {
  gsap.to(".text3", {
    y: -100,
    opacity: 0,
    duration: 1,
  })
  gsap.to(".tx3", {
    y: 100,
    duration: 1,
  })
});

// all additional classes remove

fantasticcoder.addEventListener('mouseleave', () => {
  gsap.to(".text3", {
    y: -10,
    opacity: 1,
    duration: 1,
  })
  gsap.to(".tx3", {
    y: 10,
    duration: 1,
  })
});

// OLD WORLD WEB - Web Design

// for hover effect
const old = document.querySelector('.old');
// all additional classes add 
old.addEventListener('mouseenter', () => {
  gsap.to(".text4", {
    y: -100,
    opacity: 0,
    duration: 1,
  })
  gsap.to(".tx4", {
    y: 100,
    duration: 1,
  })
});

// all additional classes remove

old.addEventListener('mouseleave', () => {
  gsap.to(".text4", {
    y: -10,
    opacity: 1,
    duration: 1,
  })
  gsap.to(".tx4", {
    y: 10,
    duration: 1,
  })
});
/* clown daddy - wev design */
// for hover effect
const clown = document.querySelector('.clown');
// all additional classes add 
clown.addEventListener('mouseenter', () => {
  gsap.to(".text5", {
    y: -100,
    opacity: 0,
    duration: 1,
  })
  gsap.to(".tx5", {
    y: 100,
    duration: 1,
  })
});

// all additional classes remove

clown.addEventListener('mouseleave', () => {
  gsap.to(".text5", {
    y: -10,
    opacity: 1,
    duration: 1,
  })
  gsap.to(".tx5", {
    y: 10,
    duration: 1,
  })
});


/* the nextstream - web design  */

const arrowb = document.querySelector(".arrowb")


// for hover effect
const nextstreamhovereffect = document.querySelector('.nextstream_hover-effect');
const nextstream = document.querySelector('.nextstream');
const nextstream_space = document.querySelector('.nextstream_space');
const blackarrow = document.querySelector('.blackarrow')
// all additional classes add 
nextstream.addEventListener('mouseenter', () => {
  // blackarrow.classList.add('changeclore')
  if (arrowb) {
    var newImageSrc = "img/Group 4.svg";
    arrowb.src = newImageSrc;
  }
  gsap.to(".text6", {
    y: -100,
    opacity: 0,
    duration: 1,
  })
  gsap.to(".tx6", {
    y: 100,
    duration: 1,
  })
});

// all additional classes remove

nextstream.addEventListener('mouseleave', () => {
  // blackarrow.classList.remove('changeclore')
  if (arrowb) {
    var newImageSrc = "img/Group 4 (1).svg";
    arrowb.src = newImageSrc;
  }
  nextstream.classList.remove('nextstream_addeffect', 'hovered');
  gsap.to(".text6", {
    y: -10,
    opacity: 1,
    duration: 1,
  })
  gsap.to(".tx6", {
    y: 10,
    duration: 1,
  })
});

const cross = document.querySelector(".cross")
const closebtn = document.querySelector(".closebtn")
closebtn.addEventListener('mouseenter', () => {
  gsap.to(".cross", {
    opacity: 1,
    rotate: 90,
    duration: .5,
  })
});
closebtn.addEventListener('mouseleave', () => {
  gsap.to(".cross", {
    opacity: 0,
    rotate: 0,
    duration: .5,
  })
});



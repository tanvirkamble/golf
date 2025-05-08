var cursor = document.querySelector('#cursor');
var cursorblur = document.querySelector('#cursor-blur');
document.addEventListener('mousemove', (e) => {
  cursor.style.left = e.x - 10 + 'px';
  cursor.style.top = e.y - 10 + 'px';
  cursorblur.style.left = e.x - 270 + 'px';
  cursorblur.style.top = e.y - 270 + 'px';
});

var navLinks = document.querySelectorAll('.nav_head h4');
// console.log(navLinks);
navLinks.forEach((e) => {
  e.addEventListener('mouseenter', () => {
    cursor.style.transform = 'scale(3)';
    cursor.style.border = '1px solid white';
    cursor.style.backgroundColor = 'transparent';
    cursor.style.zIndex = 10;
  });

  e.addEventListener('mouseleave', () => {
    cursor.style.transform = 'scale(1)';
    cursor.style.border = '0px solid #a7d921';
    cursor.style.backgroundColor = '#a7d921';
    cursor.style.zIndex = 1;
  });
});

var greendiv = document.querySelector('.greendiv');
greendiv.addEventListener('mouseenter', () => {
  cursor.style.transform = 'scale(3)';
  cursor.style.border = '0px solid #fff';
  cursor.style.backgroundColor = '#fff';
  cursorblur.style.backgroundColor = 'transparent';
  cursor.style.left = e.x + 'px';
  cursor.style.top = e.y + 'px';
  cursor.style.zIndex = 0;
});
greendiv.addEventListener('mouseleave', () => {
  cursor.style.transform = 'scale(1)';
  cursor.style.border = '0px solid #a7d921';
  cursor.style.backgroundColor = '#a7d921';
  cursorblur.style.backgroundColor = '#a8d92163';
  cursor.style.zIndex = 1;
});

var foot = document.querySelectorAll('.footer_text > div');
// console.log(foot);

foot.forEach((e) => {
  e.addEventListener('mouseenter', () => {
    // console.log('hovered');
    cursor.style.transform = 'scale(3)';
    cursor.style.border = '1px solid #fff';
    cursor.style.backgroundColor = 'transparent';
    cursorblur.style.backgroundColor = 'transparent';
    cursor.style.zIndex = 10;
  });

  e.addEventListener('mouseleave', () => {
    // console.log('unhovered');
    cursor.style.transform = 'scale(1)';
    cursor.style.border = '0px solid #a7d921';
    cursor.style.backgroundColor = '#a7d921';
    cursorblur.style.backgroundColor = '#a8d92163';
    cursor.style.zIndex = 1;
  });
});

gsap.to('#nav', {
  backgroundColor: 'rgb(0, 0, 0)',
  duration: 0.5,
  height: '80px',
  scrollTrigger: {
    trigger: '#nav',
    scsroller: 'body',
    // markers:  ,
    start: 'top -10%',
    end: 'top -11%',
    scrub: 2,
  },
});

gsap.to('#main', {
  backgroundColor: 'black',
  scrollTrigger: {
    trigger: '#main',
    scroller: 'body',
    // markers: true,
    start: 'top -30%',
    end: 'top -80%',
    scrub: 2,
  },
});

gsap.from('#aboutUs ', {
  y: 50,
  opacity: 0,
  duration: 3,
  scrollTrigger: {
    trigger: '#aboutUs ',
    scroller: 'body',
    // markers: true,
    start: 'top 80%',
    end: 'top 50%',
    scrub: 2,
  },
});

gsap.from('.card', {
  scale: 0.9,
  opacity: 0,
  duration: 0.5,
  scrollTrigger: {
    trigger: '.card',
    scroller: 'body',
    // markers: true,
    start: 'top 80%',
    end: 'top 60%',
    scrub: 1,
  },
});

gsap.from('#quote1', {
  x: -70,
  y: -70,
  scrollTrigger: {
    trigger: '#page4',
    scroller: 'body',
    // markers: true,
    start: 'top 55%',
    end: 'top 45%',
    scrub: 4,
  },
});
gsap.from('#quote2', {
  x: 70,
  y: 70,
  scrollTrigger: {
    trigger: '#page4',
    scroller: 'body',
    // markers: true,
    start: 'top 55%',
    end: 'top 45%',
    scrub: 4,
  },
});

gsap.from('#page4_2 h2', {
  y: 50,
  opacity: 0,
  duration: 1,
  scrollTrigger: {
    trigger: '#page4_2',
    scroller: 'body',
    // markers: true,
    start: 'top 80%',
    end: 'top 50%',
    scrub: 2,
  },
});

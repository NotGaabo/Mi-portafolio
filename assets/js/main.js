/* ----- NAVIGATION BAR TOGGLE ----- */
function myMenuFunction(){
  var menuBtn = document.getElementById("myNavMenu");
  if(menuBtn.className === "nav-menu"){
    menuBtn.className += " responsive";
  } else {
    menuBtn.className = "nav-menu";
  }
}

/* ----- NAV: transparent over hero, dark when scrolled ----- */
function headerShadow(){
  const nav = document.getElementById("header");
  if(!nav) return;
  const scrolled = document.body.scrollTop > 60 || document.documentElement.scrollTop > 60;

  if(scrolled){
    nav.classList.add('scrolled');
    nav.style.height = "70px";
    nav.style.lineHeight = "70px";
    /* Restore normal link colors when scrolled into light sections */
    nav.querySelectorAll('.nav-link').forEach(l => l.style.color = '');
    const nameEl = nav.querySelector('.nav-name');
    if(nameEl) nameEl.style.color = '';
  } else {
    nav.classList.remove('scrolled');
    nav.style.height = "90px";
    nav.style.lineHeight = "90px";
  }
}

/* ----- ACTIVE LINK ON SCROLL ----- */
function scrollActive(){
  const scrollY = window.scrollY;
  const sections = document.querySelectorAll('section[id]');
  sections.forEach(current => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 100;
    const sectionId = current.getAttribute('id');
    const navLink = document.querySelector('.nav-menu a[href*=' + sectionId + ']');
    if(!navLink) return;
    if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
      navLink.classList.add('active-link');
    } else {
      navLink.classList.remove('active-link');
    }
  });
}

window.onscroll = function(){
  headerShadow();
  scrollActive();
};

/* Run on load too so nav starts correctly */
document.addEventListener('DOMContentLoaded', function(){
  headerShadow();
});

/* ----- SCROLL REVEAL ----- */
const sr = ScrollReveal({
  origin: 'top',
  distance: '60px',
  duration: 1800,
  reset: true
});

sr.reveal('.top-header', {});
sr.reveal('.git-entry', { interval: 150 });

const srLeft = ScrollReveal({ origin:'left', distance:'60px', duration:1800, reset:true });
srLeft.reveal('.about-info', { delay: 100 });
srLeft.reveal('.contact-info', { delay: 100 });

const srRight = ScrollReveal({ origin:'right', distance:'60px', duration:1800, reset:true });
srRight.reveal('.skills-box', { delay: 100 });
srRight.reveal('.form-control', { delay: 100 });
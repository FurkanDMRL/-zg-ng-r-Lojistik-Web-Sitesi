'use strict';



/**
 * navbar toggle
 */

const navbar = document.querySelector("[data-navbar]");
const navToggler = document.querySelectorAll("[data-nav-toggler]");
const navLinks = document.querySelectorAll("[data-nav-link]");
const overlay = document.querySelector("[data-overlay]");
const hiddenElements = document.querySelectorAll('.hidden');
const hiddenTexts = document.querySelectorAll('.texthidden');
const fadeTexts = document.querySelectorAll('.textfade');
const ambarli = document.querySelector("#ambarli");



for (let i = 0; i < navToggler.length; i++) {
  navToggler[i].addEventListener("click", function () {
    navbar.classList.toggle("active");
    overlay.classList.toggle("active");
  });
}

for (let i = 0; i < navLinks.length; i++) {
  navLinks[i].addEventListener("click", function () {
    navbar.classList.remove("active");
    overlay.classList.remove("active");
  });
}



/**
 * header
 */

const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");

window.addEventListener("scroll", function () {
  if (window.scrollY >= 100) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
});

//scroll animation

const observer = new IntersectionObserver((entries)=>{
  entries.forEach((entry)=>{
    console.log(entry)
    if(entry.isIntersecting){
      entry.target.classList.add('show')
    }
  })
})
const observ = new IntersectionObserver((entries)=>{
  entries.forEach((entry)=>{
    console.log(entry)
    if(entry.isIntersecting){
      entry.target.classList.add('showText')
    }
  })
})
const obs = new IntersectionObserver((entries)=>{
  entries.forEach((entry)=>{
    console.log(entry)
    if(entry.isIntersecting){
      entry.target.classList.add('showFade')
    }
  })
})

hiddenElements.forEach((el)=>observer.observe(el));
hiddenTexts.forEach((el)=>observ.observe(el));
fadeTexts.forEach((el)=>obs.observe(el));


//logo küçültme

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    ambarli.classList.add("shrink");
  } else {
    ambarli.classList.remove("shrink");
  }
});

//about kısmı vizyon misyon
function goster(kisim) {
  var vizyonText = document.getElementById('vizyon-text');
  var misyonText = document.getElementById('misyon-text');
  var aboutText = document.getElementById('about-text')

  if (kisim === 'vizyon') {
    vizyonText.classList.add('active');
    misyonText.classList.remove('active');
    aboutText.classList.remove('active');
  } else if (kisim === 'misyon') {
    misyonText.classList.add('active');
    vizyonText.classList.remove('active');
    aboutText.classList.remove('active');
  }else if (kisim === 'hakkımızda') {
    aboutText.classList.add('active');
    vizyonText.classList.remove('active');
    misyonText.classList.remove('active');
  }
}
// linke gittiğinde hover renginde kalması

document.addEventListener('DOMContentLoaded', function() {
  var links = document.querySelectorAll('nav a');

  links.forEach(function(link) {
      link.addEventListener('click', function(event) {
          event.preventDefault();
          var targetUrl = this.getAttribute('href');
          localStorage.setItem('lastHoveredLink', targetUrl);
          window.location.href = targetUrl;
      });

      var lastHoveredLink = localStorage.getItem('lastHoveredLink');
      if (lastHoveredLink === link.getAttribute('href')) {
          link.classList.add('hovered');
          setLinkActive(link)
      }
      function setLinkActive(link) {
        links.forEach(function(l) {
            l.classList.remove('active');
        });
        link.classList.add('active');
    }
  });});
  //html silme
//   window.onload = function() {
//     // Tarayıcı URL'sini temizleme
//     var cleanUrl = window.location.href.replace('.html', '');
//     window.history.replaceState({}, document.title, cleanUrl);
// };

document.addEventListener("scroll", function() {
  var scrollTop = window.scrollY || document.documentElement.scrollTop;
  var backgroundPosition = "50% " + (scrollTop / 1.5) + "px"; // Scroll yönüne göre pozisyon hesaplaması
  document.querySelector(".page-header").style.backgroundPosition = backgroundPosition;
});
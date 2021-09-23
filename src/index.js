import "./scss/index.scss";
import Inputmask from "inputmask";

/* Nav Scroll */

(function($) {
  $(window).on("load", function() {
      $("a[rel='m_PageScroll2id']").mPageScroll2id();
  });
})(jQuery);

/* SCROLL TO TOP BTN */
const scrollToTopButton = document.getElementById("js-top");
const scrollFunc = () => {
  const y = window.scrollY;
  if (y > 200) {
    scrollToTopButton.className = "top-link show";
  } else {
    scrollToTopButton.className = "top-link hide";
  }
};

window.addEventListener("scroll", scrollFunc);

const scrollToTop = () => {
  const c = document.documentElement.scrollTop || document.body.scrollTop;
  if (c > 0) {
    window.requestAnimationFrame(scrollToTop);
    window.scrollTo(0, c - c / 18);
  }
};

scrollToTopButton.onclick = function (e) {
  e.preventDefault();
  scrollToTop();
};
/* burger */
(function () {
  const hamburger = {
    navToggle: document.querySelector('.nav-toggle'),
    nav: document.querySelector('nav'),

    doToggle: function (e) {
      e.preventDefault();
      this.navToggle.classList.toggle('expanded');
      this.nav.classList.toggle('expanded');
    },
  };
  hamburger.navToggle.addEventListener('click', function (e) { hamburger.doToggle(e); });
  // hamburger.nav.addEventListener('click', function(e) { hamburger.doToggle(e); });
}());

// Burger onscroll toggle
function burgerButtonToggle() {
  const burgerButton = document.querySelector(".nav-toggle")
  const yPos = window.scrollY;
  if (yPos > 10) {
    burgerButton.classList.add("unvisible")
    burgerButton.classList.remove("visible");
  } else {
    burgerButton.classList.remove("unvisible");
    burgerButton.classList.add("visible");
  }
}
window.addEventListener("scroll", burgerButtonToggle);


// desktop menu stick toggle
function stickyMenuToggle() {
  const stickyMenu = document.querySelector(".sidebar-menu")
  const yPos = window.scrollY;
  if (yPos > 80) {
    stickyMenu.classList.add("sidevisible")
    stickyMenu.classList.remove("sideunvisible")
  } else {
    stickyMenu.classList.remove("sidevisible")
    stickyMenu.classList.add("sideunvisible")
  }
}
window.addEventListener("scroll", stickyMenuToggle);
// mobile bottom menu trigger
function stickyMobileMenuToggle() {
  const stickyMobileMenu = document.querySelector(".mobile__menu-wrapper")
  const yPos = window.scrollY;
  if (yPos > 80) {
    stickyMobileMenu.classList.add("sidevisible")
    stickyMobileMenu.classList.remove("sideunvisible")
  } else {
    stickyMobileMenu.classList.remove("sidevisible")
    stickyMobileMenu.classList.add("sideunvisible")
  }
}
window.addEventListener("scroll", stickyMobileMenuToggle 
  );

// date year
document.getElementById("year").innerHTML = new Date().getFullYear();

/* TABS */
function tabsChange() {
  const checkBox = document.getElementById("toggle_checkbox");
  const text1 = document.getElementById("text1");
  const text2 = document.getElementById("text2");
  const msk = document.getElementById("moscow");
  const spb = document.getElementById("saintp")
  if (checkBox.checked == true) {
      text2.style.display = "block";
      text1.style.display = "none";
      spb.classList.add("active-city")
      msk.classList.remove("active-city")
  } else {
      text1.style.display = "block";
      text2.style.display = "none";
      msk.classList.add("active-city")
      spb.classList.remove("active-city")
  }
}

document.getElementById("toggle_checkbox").addEventListener("click", tabsChange)

const selector = document.getElementById("phonenum");
const im = new Inputmask("+7(999)-999-99-99");
im.mask(selector);

const selectorModal = document.getElementById("modalphonenum");
const imModal = new Inputmask("+7(999)-999-99-99");
imModal.mask(selectorModal);

// slider 

function slidesPlugin(activeSlide = 0) {
  const slides = document.querySelectorAll('.slide')

  slides[activeSlide].classList.add('active')
  
  for (const slide of slides) {
      slide.addEventListener('click', () => {
          clearActiveClass()
          slide.classList.add('active')
      })
  }
  function clearActiveClass() {
      slides.forEach((slide) => {
  slide.classList.remove('active')
      })
  }
}
slidesPlugin(2)
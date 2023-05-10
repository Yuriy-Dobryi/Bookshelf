import './switcher.js';

const mobileMenuBtn = document.querySelector('[data-mobile-menu-btn]');
const mobileMenu = document.querySelector('[data-mobile-menu]');
const body = document.querySelector('body');

mobileMenuBtn.addEventListener('click', onOpenMobileMenu);
function onOpenMobileMenu() {
  mobileMenuBtn.classList.toggle('is-open');
  mobileMenu.classList.toggle('is-open');
  body.classList.toggle('mobile-menu-open');
}

function setActivePage() {
  const links = document.querySelectorAll('.navigation-link');
  const currentPage = window.location.href;
  links.forEach(link => {
    if (link.href === currentPage) {
      link.classList.add('active');
    }
  });
}

setActivePage();
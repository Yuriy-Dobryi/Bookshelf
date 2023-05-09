const mobileMenuBtn = document.querySelector('[data-mobile-menu-btn]');
const mobileMenu = document.querySelector('[data-mobile-menu]');
const body = document.querySelector('body');

mobileMenuBtn.addEventListener('click', onOpenMobileMenu);
function onOpenMobileMenu() {
  mobileMenuBtn.classList.toggle('is-open');
  mobileMenu.classList.toggle('is-open');
  body.classList.toggle('mobile-menu-open');
}

// console.log('hello from menu header');

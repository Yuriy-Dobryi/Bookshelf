const mobileMenuBtn = document.querySelector('[data-mobile-menu-btn]');
const mobileMenu = document.querySelector('[data-mobile-menu]');
const body = document.querySelector('body');

mobileMenuBtn.addEventListener('click', onOpenMobileMenu);
function onOpenMobileMenu() {
  mobileMenuBtn.classList.toggle('is-open');
  mobileMenu.classList.toggle('is-open');
  body.classList.toggle('mobile-menu-open');
}

  // const currentPageName = document.querySelectorAll('.navigation-item');
  // currentPageName.forEach(link => {
  //   if (link.href === './index.html' || (link.href ===  './unbreakable/index.html') || (link.href ===  './unbreakable/')) {
  //     currentPageName.add('current');
  //   } else {
  //     currentPageName.remove('current');
  //   }
  // });
  function setActiveLink() {
  const links = document.querySelectorAll('.navigation-link');
  const currentUrl = window.location.href;
  links.forEach(link => {
    if (link.href === currentUrl) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
  }

// console.log('hello from menu header');

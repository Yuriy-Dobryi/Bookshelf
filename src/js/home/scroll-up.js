const scrollUpBtn = document.getElementById("scrollUpBtn");
const MIN_DEBOUNCE_DELAY = 500;

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
};

function updateMoveTopBtnDisplayByScroll() {
  const currentCursorPosition = window.pageYOffset;
  if (currentCursorPosition > 1000) {
    scrollUpBtn.style.display = "block";
  } else {
    scrollUpBtn.style.display = "none";
  }
}

window.addEventListener('scroll', updateMoveTopBtnDisplayByScroll);
scrollUpBtn.addEventListener("click", scrollToTop);



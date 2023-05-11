const bodyRef = document.querySelector('body');
const switherRef = document.querySelector('#switcher');
const savedSwitcherState = localStorage.getItem('THEME');

switherRef.addEventListener('change', () => {
  localStorage.setItem('THEME', switherRef.checked === true ? `dark` : 'light');
  bodyRef.classList.toggle('dark-theme');
});

function setPageThemeColorByLocalStorage() {
  if (savedSwitcherState === 'light') {
    switherRef.checked = false;
  } else if (savedSwitcherState === 'dark') {
    switherRef.checked = true;
    bodyRef.classList.toggle('dark-theme');
  }
}

setPageThemeColorByLocalStorage();
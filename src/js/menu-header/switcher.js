const switherRef = document.querySelector('#switcher');

switherRef.addEventListener('change', () =>
  localStorage.setItem('THEME',
    switherRef.checked === true ? `dark` : 'light'));

function setSwitcherByLocalStorage() {
  const savedSwitcherState = localStorage.getItem('THEME');
  if (savedSwitcherState === 'light') {
    switherRef.checked = false;
  } else if (savedSwitcherState === 'dark') {
    switherRef.checked = true;
  }
}

setSwitcherByLocalStorage();
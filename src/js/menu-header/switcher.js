const switherRef = document.querySelector('#switcher');

switherRef.addEventListener('change', () =>
  localStorage.setItem('THEME',
    switherRef.checked === true ? `dark` : 'light'));

function setSwitcherByLocalStorage() {
  const savedSwitcherState = localStorage.getItem('THEME');
  switherRef.checked =
    savedSwitcherState === 'light' ? false : true;
}

setSwitcherByLocalStorage();
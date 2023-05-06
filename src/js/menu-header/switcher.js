const main = document.querySelector('main');

// Функція для зміни фону main
const changeMainBackground = (color) => {
    main.style.backgroundColor = color;
}

// Функція для зберігання фону у localStorage
const saveSettingsToLocalStorage = (color) => {
  localStorage.setItem('mainBackgroundColor', color);
}
 // Функція для відображення відповідного фону при завантаженні сторінки
function loadSettingsFromLocalStorage() {
    const color = localStorage.getItem('mainBackgroundColor');
    if (color) {
      changeMainBackground(color);
    }
}
// Виклик функції для завантаження збережених налаштувань
loadSettingsFromLocalStorage();
 
 
 
 
 
 
 
 
// Модуль основних дій Списку категорій

// Логіка 'підсвічування' вибраної категорії (css)
const categoriesList = document.querySelector('.categories-list');

categoriesList.addEventListener('click', onItemCategoryClick);

function onItemCategoryClick(e) {
  if (e.target.nodeName !== 'LI') {
    return;
  }
  const currentItem = document.querySelector('.current-catigory');
  currentItem.classList.remove('current-catigory');
  e.target.classList.add('current-catigory');
}

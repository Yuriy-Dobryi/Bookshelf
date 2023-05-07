// Логіка 'підсвічування' вибраної категорії (css)
const categoriesList = document.querySelector('.categories-list');

categoriesList.addEventListener('click', onItemCategoryClick);

function onItemCategoryClick(e) {
  if (e.target.nodeName !== 'LI') {
    return;
  }
  const currentItem = document.querySelector('.current-category');
  currentItem.classList.remove('current-category');
  e.target.classList.add('current-category');
}

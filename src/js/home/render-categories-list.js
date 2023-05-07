// Модуль для створення розмітки списку категорій

import FetchCategoriesAll from './service-categories-all';
import { renderBooksList, renderBooksListCategori } from './render-books-list';

const fetchApiCategories = new FetchCategoriesAll();
const categoriesList = document.querySelector('.categories-list');

const renderCategoriesList = async () => {
  const markupCategoriesList = await fetchApiCategories.getCategoriesList();

  const markupList = markupCategoriesList
    .map(category => {
      return `<li class="categories-item" data-category-books="${category.list_name}">${category.list_name}</li>`;
    })
    .join('');

  categoriesList.insertAdjacentHTML('beforeend', markupList);

  // Рендер категорій при натисканні на All categories
  const itemAllCategories =
    document.querySelector('.categories-list').firstElementChild;
  itemAllCategories.addEventListener('click', renderBooksList);

  // Рендер вибраної категорії
  categoriesList.addEventListener('click', onItemCategoryClick);

  function onItemCategoryClick(e) {
    if (e.target.nodeName !== 'LI') {
      return;
    }
    const category = e.target.dataset.categoryBooks;
    renderBooksListCategori(category);
  }
};

renderCategoriesList();

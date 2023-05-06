// Модуль для створення розмітки списку категорій

import FetchCategoriesAll from './service-categories-all';
const fetchApiCategories = new FetchCategoriesAll();

const categoriesList = document.querySelector('.categories-list');

const renderCategoriesList = async () => {
  const markupCategoriesList = await fetchApiCategories.getCategoriesList();

  const markupList = markupCategoriesList
    .map(category => {
      return `<li class="categories-item">${category.list_name}</li>`;
    })
    .join('');

  categoriesList.insertAdjacentHTML('beforeend', markupList);
};

renderCategoriesList();

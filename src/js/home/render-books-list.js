import FetchCategoriesAll from './service-categories-all';

const fetchApiCategories = new FetchCategoriesAll();

fetchApiCategories.getCategoriesList().then(res => console.log(res));

fetchApiCategories
  .getCategoriesSelected('Business Books')
  .then(res => console.log(res));

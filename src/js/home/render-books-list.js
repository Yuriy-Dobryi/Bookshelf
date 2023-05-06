import FetchCategoriesAll from './service-categories-all';

const fetchApiCategories = new FetchCategoriesAll();

fetchApiCategories.getCategoriesList().then(res => console.log(res));

fetchApiCategories.getCategoriesTop().then(res => console.log(res));

fetchApiCategories
  .getCategoriesSelected('Business Books')
  .then(res => console.log(res));

fetchApiCategories
  .getBookId('643282b1e85766588626a087')
  .then(res => console.log(res));

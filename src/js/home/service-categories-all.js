const URL_LIST = 'https://books-backend.p.goit.global/books/category-list';
const URL_TOP_BOOKS = 'https://books-backend.p.goit.global/books_top_books';
const URL_CATEGORY = 'https://books-backend.p.goit.global/books/category';

export default class FetchCategoriesAll {
  constructor() {}

  getCategoriesList() {
    return fetch(URL_LIST).then(response => response.json());
  }

  getCategoriesTop() {
    return fetch(URL_TOP_BOOKS).then(response => response.json());
  }

  getCategoriesSelected(gategory) {
    return fetch(`${URL_CATEGORY}?category=${gategory}`).then(response =>
      response.json()
    );
  }
}

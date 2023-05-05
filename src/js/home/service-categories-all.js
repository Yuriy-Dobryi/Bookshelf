const URL_BASE = 'https://books-backend.p.goit.global/';

export default class FetchCategoriesAll {
  constructor() {}

  getCategoriesList() {
    return fetch(`${URL_BASE}books/category-list`).then(response =>
      response.json()
    );
  }

  getCategoriesTop() {
    return fetch(`${URL_BASE}books/top-books`).then(response =>
      response.json()
    );
  }

  getCategoriesSelected(gategory) {
    return fetch(`${URL_BASE}books/category?category=${gategory}`).then(
      response => response.json()
    );
  }

  getBookId(id) {
    return fetch(`${URL_BASE}books/${id}`).then(response => response.json());
  }
}

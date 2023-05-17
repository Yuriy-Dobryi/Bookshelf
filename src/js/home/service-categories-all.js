const BASE_URL = 'https://books-backend.p.goit.global/';

export default class FetchCategoriesAll {
  constructor() {}

  getCategoriesList() {
    return fetch(`${BASE_URL}books/category-list`).then(response =>
      response.json()
    );
  }

  getCategoriesTop() {
    return fetch(`${BASE_URL}books/top-books`).then(response =>
      response.json()
    );
  }

  getSelectedCategories(gategory) {
    return fetch(`${BASE_URL}books/category?category=${gategory}`).then(
      response => response.json()
    );
  }

  getBookId(id) {
    return fetch(`${BASE_URL}books/${id}`).then(response => response.json());
  }
}
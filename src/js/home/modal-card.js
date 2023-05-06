import FetchCategoriesAll from './service-categories-all';

const fetchApiCategories = new FetchCategoriesAll();

export async function requestCard(bookId) {
  const modalBook = await fetchApiCategories.getBookId(bookId);
  console.log(modalBook);
  
  const bookList = JSON.parse(localStorage.getItem('SHOPPING-BOOKS-LIST'))
  if (bookList) {
    bookList.push(modalBook);
    localStorage.setItem('SHOPPING-BOOKS-LIST', JSON.stringify(bookList));
  } else {
    localStorage.setItem('SHOPPING-BOOKS-LIST', JSON.stringify([modalBook]));
  }
}
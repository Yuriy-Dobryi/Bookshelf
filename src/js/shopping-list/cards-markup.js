import books from '../../images/book-logo/bookLogo-tablet@2x.png';

const bookList = JSON.parse(localStorage.getItem('SHOPPING-BOOKS-LIST'));
const shoppingListRef = document.querySelector('.shopping-list-books');

export function renderShoppingList() {
  if (bookList) {
    // renderShoppingCardList(bookList);
  } else {
    renderEmptyShoppingList();
  }
}

function renderShoppingCardList(bookList) {
  shoppingListRef.innerHTML = bookList
    .map(
      ({ book }) => `
      заміни цей текст на свою розмітку
      `
    )
    .join();
}

function renderEmptyShoppingList() {
  shoppingListRef.innerHTML = `
  <p>This page is empty, add some books and proceed to order.</p>
  <img src=${books}>
  `;
}

renderShoppingList();
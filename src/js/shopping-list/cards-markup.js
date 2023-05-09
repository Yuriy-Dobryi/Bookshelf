import books from '../../images/book-logo/empty-logo.png';

const bookList = JSON.parse(localStorage.getItem('SHOPPING-BOOKS-LIST'));

const shoppingListRef = document.querySelector('.shopping-list-books');
const emptyShoppingList = document.querySelector('.empty-shopping-list');

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
      *
      `
    )
    .join();
}

function renderEmptyShoppingList() {
  emptyShoppingList.innerHTML = `
  <p class="empty-shopping-text">This page is empty, add some books and proceed to order.</p>
  <img class="empty-shopping-books-img" src="${books}" alt="Alternative Books, when shopping list is empty">
  `;
}

function checkViewPortForSupportDisplay() {
  const supportRef = document.querySelector('.support');
  const viewportWidth = window.innerWidth;

  if (viewportWidth < 1440) {
    supportRef.classList.add('is-hide');
  }
}

checkViewPortForSupportDisplay();
renderShoppingList();
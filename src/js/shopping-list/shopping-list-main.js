import {
  shoppingListRef,
  paginationRef, renderShoppingList,
} from './shopping-markup';

function getBookListFromStorage() {
  return JSON.parse(localStorage.getItem('SHOPPING-BOOKS-LIST'));
}

function checkViewPortForSupportDisplay() {
  const supportRef = document.querySelector('.support');
  const viewportWidth = window.innerWidth;

  if (viewportWidth < 1440) {
    supportRef.classList.add('is-hide');
  }
}

function removeBookInLocalStorage(bookId) {
  const bookList = getBookListFromStorage();
  const updateBookList = bookList.filter(book => book._id !== bookId);

  if (updateBookList.length === 0) {
    localStorage.removeItem('SHOPPING-BOOKS-LIST');
  } else {
    localStorage.setItem('SHOPPING-BOOKS-LIST', JSON.stringify(updateBookList));
  }
}

checkViewPortForSupportDisplay();
renderShoppingList(getBookListFromStorage(), 1);

shoppingListRef.addEventListener('click', ({ target }) => {
  const bookCard = target.closest('.btn-card_close');
  if (bookCard) {
    const bookId = bookCard.dataset.bookId;

    removeBookInLocalStorage(bookId);
    renderShoppingList(getBookListFromStorage(), 1);
  }
});

paginationRef.addEventListener('click', ({ target }) => {
  const pageBtn = target.closest('.page-btn');
  if (pageBtn) {
    renderShoppingList(getBookListFromStorage(), pageBtn.textContent);
  }
});
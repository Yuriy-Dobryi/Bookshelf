import {
  booksListRef,
  paginationRef,
  renderShopListSection,
  renderSelectedBooksPage,
} from './js/shopping-list/shopping-markup';

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
renderShopListSection(getBookListFromStorage());

booksListRef.addEventListener('click', ({ target }) => {
  const bookCard = target.closest('.btn-card_remove');
  if (bookCard) {
    const bookId = bookCard.dataset.bookId;

    removeBookInLocalStorage(bookId);
    renderShopListSection(getBookListFromStorage());
  }
});

paginationRef.addEventListener('click', ({ target }) => {
  const clickOnBtn = target.closest('.page-btn');

  if (clickOnBtn) {
    const activePage = paginationRef.querySelector('.active-page');
    if (activePage) {
      activePage.classList.remove('active-page');
    }
    target.classList.add('active-page');

    renderSelectedBooksPage(getBookListFromStorage(), target.textContent);
  }
});
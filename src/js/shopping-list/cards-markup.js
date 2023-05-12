import sprite from '../../images/sprite.svg';
import books from '../../images/book-logo/empty-logo.png';
import books from '../../images/book-logo/empty-logo.png';
import amazonImage from '../../images/card/amazon.png';
import amazonImage_2x from '../../images/card/amazon@2x.png';
import appleImage from '../../images/card/apple.png';
import appleImage_2x from '../../images/card/apple@2x.png';
import bookshopImage from '../../images/card/bookShop.png';
import bookshopImage_2x from '../../images/card/bookShop@2x.png';

const shoppingListRef = document.querySelector('.shopping-list-books');
const emptyShoppingWrapper = document.querySelector('.empty-shopping-wrapper');

export function renderShoppingList() {
  const bookList = JSON.parse(localStorage.getItem('SHOPPING-BOOKS-LIST'));
  if (bookList) {
    renderShoppingCardList(bookList);
  } else {
    renderEmptyShoppingList();
  }
}

function renderShoppingCardList(bookList) {
  shoppingListRef.innerHTML = bookList
    .map(
      ({
        _id,
        book_image,
        buy_links,
        title,
        book_image_width,
        book_image_height,
        list_name,
        age_group,
        description,
        author,
      }) => `
      <li class="galleryitem">
              <img
              class="galleryimage"
              src="${book_image}"
              width="${book_image_width}"
              height="${book_image_height}"
              alt="${title}"
              />
          <div class="div_card">
          <h2 class="title_card">${title}</h2>
          <p class="category-book">${list_name}</p>
          <p class="card_text">${description}</p>
          <p class="card_avter">${author}</p>
          </div>
          <div class="list-shops">
          <a class="shop-link"  href="${buy_links[0].url}" target="_blank" crossorigin="anonymous"  rel="noopener noreferrer">
            <img class="img-amazon" src="${amazonImage}"
                srcset="${amazonImage_2x} 2x"
                alt="Amazon shop" />
            </a>
            <a class=" shop-link" href="${buy_links[1].url}" target="_blank" crossorigin="anonymous"  rel="noopener noreferrer" aria-label="Apple-books">
            <img class="img-apple" src="${appleImage}"
                srcset="${appleImage_2x} 2x"
                alt="Apple shop" />
            </a>
            <a class="shop-link" href="${buy_links[4].url}" target="_blank" crossorigin="anonymous"  rel="noopener noreferrer">
            <img class="img-bookshop" src="${bookshopImage}"
                srcset="${bookshopImage_2x} 2x"
                alt="Book shop" />
            </a>
            </div>
            <button class="btn-card_close" data-book-id="${_id}">
            <svg class="btn-svg-close">
                <use href="${sprite}#icon-trash"></use>
            </svg>
            </button>
      </li>`
    )
    .join('');
}

function renderEmptyShoppingList() {
  emptyShoppingWrapper.innerHTML = `
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

function removeBookInLocalStorage(bookList, bookId) {
  const updateBookList = bookList.filter(book => book._id !== bookId);

  if (updateBookList.length === 0) {
    localStorage.removeItem('SHOPPING-BOOKS-LIST');
  } else {
    localStorage.setItem('SHOPPING-BOOKS-LIST', JSON.stringify(updateBookList));
  }
}

checkViewPortForSupportDisplay();
renderShoppingList();

shoppingListRef.addEventListener('click', ({ target }) => {
  const bookCard = target.closest('.btn-card_close');
  if (bookCard) {
    const bookId = bookCard.dataset.bookId;
    const bookList = JSON.parse(localStorage.getItem('SHOPPING-BOOKS-LIST'));

    removeBookInLocalStorage(bookList, bookId);
    shoppingListRef.innerHTML = '';
    renderShoppingList();
  }
});
import sprite from '../../images/sprite.svg';
import alternativeBooks from '../../images/book-logo/empty-logo.png';
import alternativeBooks_2x from '../../images/book-logo/empty-logo.png';
import amazonImage from '../../images/card/amazon.png';
import amazonImage_2x from '../../images/card/amazon@2x.png';
import appleImage from '../../images/card/apple.png';
import appleImage_2x from '../../images/card/apple@2x.png';
import bookshopImage from '../../images/card/bookShop.png';
import bookshopImage_2x from '../../images/card/bookShop@2x.png';

export const shoppingListRef = document.querySelector('.shopping-list-books');
export const paginationRef = document.querySelector('.pagination-wrapper');

function getPageMarkup(bookList, currentPage) {
  const totalPages = Math.ceil(bookList.length / 3);
  let btnsMarkup = '';

  for (let index = 1; index <= totalPages; index += 1) {
    btnsMarkup += `<button class="page-btn">${index}</button>`;
  }
  paginationRef.innerHTML = btnsMarkup;

  const startIndex = (currentPage - 1) * 3;
  const endIndex = startIndex + 3;

  return booksMarkup(bookList.slice(startIndex, endIndex));
}

function booksMarkup(bookList) {
  return bookList
    .map(
      ({
        _id,
        book_image,
        buy_links,
        title,
        book_image_width,
        book_image_height,
        list_name,
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
      </li>
      `
    )
    .join('');
}

function emptyShoppingListMarkup() {
  shoppingListRef.classList.add('empty');

  return `
  <p class="empty-shopping-text">This page is empty, add some books and proceed to order.</p>
  <img class="empty-shopping-books-img" src="${alternativeBooks}" srcset="${alternativeBooks_2x} 2x" alt="Alternative Books, when shopping list is empty">
  `;
}

export function renderShoppingList(bookList, currentPage) {
  shoppingListRef.innerHTML = bookList
    ? getPageMarkup(bookList, currentPage)
    : emptyShoppingListMarkup();
}
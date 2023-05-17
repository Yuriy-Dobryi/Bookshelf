import sprite from '../../images/sprite.svg';
import alternativeBooks from '../../images/book-logo/empty-logo.png';
import alternativeBooks_2x from '../../images/book-logo/empty-logo.png';
import amazonImage from '../../images/card/amazon.png';
import amazonImage_2x from '../../images/card/amazon@2x.png';
import appleImage from '../../images/card/apple.png';
import appleImage_2x from '../../images/card/apple@2x.png';
import bookshopImage from '../../images/card/bookShop.png';
import bookshopImage_2x from '../../images/card/bookShop@2x.png';

export const booksListRef = document.querySelector('.shopping-books-list');
export const paginationRef = document.querySelector('.pagination');
const TOTAL_BOOKS_PER_PAGE = 3;

function getBooksPageMarkup(bookList, currentPage = 1) {
  const startIndex = (currentPage - 1) * TOTAL_BOOKS_PER_PAGE;
  const endIndex = startIndex + TOTAL_BOOKS_PER_PAGE;
  
  return getBooksMarkup(bookList.slice(startIndex, endIndex));
}

function getBtnsMarkup(bookList) {
  const totalPages = Math.ceil(bookList.length / TOTAL_BOOKS_PER_PAGE);
  let btnsMarkup = '';

  for (let page = 1; page <= totalPages; page += 1) {
    btnsMarkup += `<button class="page-btn">${page}</button>`;
  }
  return btnsMarkup;
}

function getBooksMarkup(bookList) {
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
        <img class="galleryimage"
          src="${book_image}"
          width="${book_image_width}"
          height="${book_image_height}"
          alt="${title}" />
        <div class="div_card">
          <h2 class="title_card">${title}</h2>
          <p class="category-book">${list_name}</p>
          <p class="card_text">${description}</p>
          <p class="card_avter">${author}</p>
        </div>
          <div class="list-shops">
            <a class="shop-link" href="${buy_links[0].url}"
              target="_blank" crossorigin="anonymous"
              rel="noopener noreferrer" >
                <img class="img-amazon"
                  src="${amazonImage}"
                  srcset="${amazonImage_2x} 2x"
                  alt="Amazon shop" />
            </a>
            <a class="shop-link" href="${buy_links[1].url}"
              target="_blank" crossorigin="anonymous" rel="noopener noreferrer" >
                <img class="img-apple"
                  src="${appleImage}"
                  srcset="${appleImage_2x} 2x"
                  alt="Apple shop" />
            </a>
            <a class="shop-link" href="${buy_links[4].url}"
              target="_blank" crossorigin="anonymous"  rel="noopener noreferrer">
                <img class="img-bookshop"
                  src="${bookshopImage}"
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
      `)
    .join('');
}

function getEmptyShoppingListMarkup() {
  booksListRef.classList.add('empty');

  return `
  <p class="empty-shopping-text">This page is empty, add some books and proceed to order.</p>
  <img class="empty-shopping-books-img" src="${alternativeBooks}" srcset="${alternativeBooks_2x} 2x" alt="Alternative Books, when shopping list is empty">
  `;
}

export function renderShoppingListSection(bookList) {
  if (bookList) {
    booksListRef.innerHTML = getBooksPageMarkup(bookList);
    paginationRef.innerHTML = getBtnsMarkup(bookList);
  } else {
    getEmptyShoppingListMarkup();
  }
}

export function renderSelectedBooksPage(bookList, currentPage) {
  booksListRef.innerHTML = getBooksPageMarkup(bookList, currentPage);
}
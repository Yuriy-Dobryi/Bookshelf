import * as basicLightbox from 'basiclightbox';
import 'basiclightbox/dist/basicLightbox.min.css';

import amazonImage from '../../images/card/amazon.png';
import amazonImage_2x from '../../images/card/amazon@2x.png';
import appleImage from '../../images/card/apple.png';
import appleImage_2x from '../../images/card/apple@2x.png';
import bookshopImage from '../../images/card/bookShop.png';
import bookshopImage_2x from '../../images/card/bookShop.png';
import sprite from '../../images/sprite.svg';

import { removeBookInLocalStorage } from '../home/modal-card-function/removeBook_modal.js';

export async function openCardModal(selectedBook) {
  const { book_image, title, author, description, buy_links } = selectedBook;

  const modalCard = basicLightbox.create(
    `
    <div class="modal-info">
    <button type="button" class="modal__close-btn">
    <svg class="modal__close-icon" width="8" height="8">
      <use href="${sprite}#icon-close"></use>
    </svg>
  </button>
    <div class="modal-pop__container">
    <img class="modal__img" src="${book_image}" alt="${title}" />
      <div class="modal-info__box">
        <h2 class="modal-info__title">${title}</h2>
        <p class="modal-info__author">${author}</p>
        <p class="modal-info__text">${description}</p>
        <ul class="modal-info__list">
          <li>
            <a class="modal-info__link" href="${buy_links[0].url}" target="_blank" crossorigin="anonymous"  rel="noopener noreferrer" aria-label="Amazon">
              <img src="${amazonImage}"
                srcset="${amazonImage_2x} 2x" alt="Amazon shop" width="62" height="19" />
            </a>
          </li>
          <li>
            <a class="modal-info__link" href="${buy_links[1].url}" target="_blank" crossorigin="anonymous"  rel="noopener noreferrer" aria-label="Apple-books">
              <img src="${appleImage}"
                srcset="${appleImage_2x} 2x" alt="Apple shop" width="33" height="32" />
            </a>
          </li>
          <li>
            <a class="modal-info__link" href="${buy_links[4].url}" target="_blank" crossorigin="anonymous"  rel="noopener noreferrer" aria-label="Bookshop">
              <img src="${bookshopImage}"
                srcset="${bookshopImage_2x} 2x" alt="Book shop" width="38" height="36" />
            </a>
          </li>
        </ul>
      </div>
</div>
    <button class="modal__add-btn modal__add-btn-js" type="submit">
    add to shopping list
</button>
<div class="modal__remove-btn-wrapper modal__remove-block-js visually-hidden">
    <button class="modal__remove-btn modal__remove-btn-js " type="submit">
        remove from the shopping list
    </button>
    <p class="modal__remobe-btn-message">
        Сongratulations! You have added the book to the shopping list. To
    delete, press the button “Remove from the shopping list”.
    </p>
    </div>
</div>`,
    {
      onShow: () => {
        document.addEventListener('keydown', onEscapeClick);
        document.addEventListener('click', onBackDropClick);
      },
      onClose: () => {
        document.removeEventListener('click', onBackDropClick);
        document.removeEventListener('keydown', onEscapeClick);
      },
      closable: false,
    }
  );

  function onEscapeClick({ code }) {
    if (code === 'Escape') {
      modalCard.close();
    }
  }

  function onBackDropClick({ target }) {
    if (!target.closest('.modal-info')) {
      modalCard.close();
    }
  }

  modalCard.show();

  const closeBtn = document.querySelector('.modal__close-btn');
  closeBtn.addEventListener('click', onCloseBtn);

  function onCloseBtn() {
    modalCard.close();
  }

  const addBookBtnRef = document.querySelector('.modal__add-btn');
  const removeBookBtnRef = document.querySelector('.modal__remove-btn-wrapper');

  function setBtnsStateByLocalStorage() {
    const bookList = JSON.parse(localStorage.getItem('SHOPPING-BOOKS-LIST'));

    if (bookList) {
      const bookExistsInList = bookList.find(book => book._id === selectedBook._id);
      if (bookExistsInList) {
        addBookBtnRef.classList.add('visually-hidden');
        removeBookBtnRef.classList.remove('visually-hidden');
      }
    }
  }
  setBtnsStateByLocalStorage();

  function onAddBookBtn() {
    addBookInLocalStorage(selectedBook);
    addBookBtnRef.classList.add('visually-hidden');
    removeBookBtnRef.classList.remove('visually-hidden');
  }
  function onRemoveBookBtn() {
    removeBookInLocalStorage(selectedBook);
    removeBookBtnRef.classList.add('visually-hidden');
    addBookBtnRef.classList.remove('visually-hidden');
  }

  addBookBtnRef.addEventListener('click', onAddBookBtn);
  removeBookBtnRef.addEventListener('click', onRemoveBookBtn);
}

function addBookInLocalStorage(selectedBook) {
  const bookList = JSON.parse(localStorage.getItem('SHOPPING-BOOKS-LIST'));

  if (bookList) {
    const bookExistsInList = bookList.find(book => book._id === selectedBook._id);

    if (!bookExistsInList) {
      bookList.push(selectedBook);
      localStorage.setItem('SHOPPING-BOOKS-LIST', JSON.stringify(bookList));
    }
  } else {
    localStorage.setItem('SHOPPING-BOOKS-LIST', JSON.stringify([selectedBook]));
  }
}

function removeBookInLocalStorage(selectedBook) {
  const bookList = JSON.parse(localStorage.getItem('SHOPPING-BOOKS-LIST'));

  const updateBookList = bookList.filter(book => book._id !== selectedBook._id);

  if (updateBookList.length === 0) {
    localStorage.removeItem('SHOPPING-BOOKS-LIST');
  } else {
    localStorage.setItem('SHOPPING-BOOKS-LIST', JSON.stringify(updateBookList));
  }
}
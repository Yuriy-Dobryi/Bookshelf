import * as basicLightbox from 'basiclightbox';
import 'basiclightbox/dist/basicLightbox.min.css';
import amazonImage1 from '../../images/card/amazon-desktop.png';
import amazonImage2 from '../../images/card/amazon-desktop@2x.png';
import appleImage1 from '../../images/card/book-desktop.png';
import appleImage2 from '../../images/card/bookOpen-desktop@2x.png';
import bookshopImage1 from '../../images/card/bookShop-desktop.png';
import bookshopImage2 from '../../images/card/bookShop-desktop.png';




export async function openCardModal(selectedBook) {
  // selectedBook це уже вибрана книга користувачем зі всіма властивостями які тобі потрібні, просто зайди на сайт і подивись https://books-backend.p.goit.global/api-docs/#/Books/get_books__id_
console.log(selectedBook)
const { book_image, title, author, description, buy_links } = selectedBook;

  const modalCard = basicLightbox.create(
    `
    <div class="modal-info">
      <img class="modal-info__image" src="${book_image}" alt="${title}" />
      <div class="modal-info__box">
        <h2 class="modal-info__title">${title}</h2>
        <p class="modal-info__author">${author}</p>
        <p class="modal-info__text">${description}</p>
        <ul class="modal-info__list">
          <li>
            <a class="modal-info__link" href="${
              buy_links[0].url
            }" target="_blank" crossorigin="anonymous"  rel="noopener noreferrer" aria-label="Amazon">
              <img srcset="${amazonImage1} 1x, ${amazonImage2} 2x" src="${amazonImage1}" alt="amazon" width="62"
              height="19" />
            </a>
          </li>
          <li>
            <a class="modal-info__link" href="${
              buy_links[1].url
            }" target="_blank" crossorigin="anonymous"  rel="noopener noreferrer" aria-label="Apple-books">
              <img srcset="${appleImage1} 1x, ${appleImage2} 2x" src="${appleImage1}" alt="apple-books" width="33"
              height="32" />
            </a>
          </li>
          <li>
            <a class="modal-info__link" href="${
              buy_links[4].url
            }" target="_blank" crossorigin="anonymous"  rel="noopener noreferrer" aria-label="Bookshop">
              <img srcset="${bookshopImage1} 1x, ${bookshopImage2} 2x" src="${bookshopImage1}" alt="bookshop"  width="38"
              height="36"/>
            </a>
          </li>
        </ul>
      </div>

    <button class="modal__add-btn modal__add-btn-js" type="submit">
    add to shopping list
</button>
<div class="modal__remove-btn-wrapper modal__remove-block-js">
    <button class="modal__remove-btn modal__remove-btn-js" type="submit">
        remove from the shopping list
    </button>
    <p class="modal__remobe-btn-message">
        Сongratulations! You have added the book to the shopping list. To
    delete, press the button “Remove from the shopping list”.
    </p>
</div>
</div>
   `,

    {
      onShow: () => document.addEventListener('keydown', onEscapeClick),
      onClose: () => document.removeEventListener('keydown', onEscapeClick),
      closable: false,
    }
  );

  function onEscapeClick({ code }) {
    if (code === 'Escape') {
      modalCard.close();
    }
  };

  modalCard.show();


};



function addBookInLocalStorage(selectedBook) {
  const bookList = JSON.parse(localStorage.getItem('SHOPPING-BOOKS-LIST'));

  if (bookList) {
    const bookExistsInList = bookList.find(
      book => book._id === selectedBook._id
    );
    if (!bookExistsInList) {
      bookList.push(selectedBook);
      localStorage.setItem('SHOPPING-BOOKS-LIST', JSON.stringify(bookList));
    }
  } else {
    localStorage.setItem('SHOPPING-BOOKS-LIST', JSON.stringify([selectedBook]));
  }
}
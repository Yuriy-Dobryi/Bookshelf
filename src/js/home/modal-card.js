import * as basicLightbox from 'basiclightbox';
import 'basiclightbox/dist/basicLightbox.min.css';

export async function openCardModal(selectedBook) {
  // selectedBook це уже вибрана книга користувачем зі всіма властивостями які тобі потрібні, просто зайди на сайт і подивись https://books-backend.p.goit.global/api-docs/#/Books/get_books__id_

  const modalCard = basicLightbox.create(
    `
    <h1 style='color: orange;'>
      Тут має бути розмітка карточки
    </h1>
    <h2 style='color: white;'>
      Шанований користувач, якщо бажаєте вийти з капкана, натисніть кнопку "Escape"
    </h2>
    <h5 style='color: green';>
      (надіюсь, у вас її немає😏)
    </h5>`,
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
}

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
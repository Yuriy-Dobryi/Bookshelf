import books from '../../images/book-logo/empty-logo.png';

const bookList = JSON.parse(localStorage.getItem('SHOPPING-BOOKS-LIST'));

const shoppingListRef = document.querySelector('.shopping-list-books');
const emptyShoppingList = document.querySelector('.empty-shopping-list');

export function renderShoppingList() {
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
        book_image,
        book_image_width,
        book_image_height,
        list_name,
        age_group,
        description,
        author,
      }) => `
      <li class="galleryitem">
          <a class="gallerylink" href="large-image.jpg">
              <img
              class="gallery__image"
              src="${book_image}"
              width="${book_image_width}"
              height="${book_image_height}"
              alt=""
              />
          </a>
          <div class="div_card">
          <h2 class="title_card">${list_name}</h2>
          <p class="card_min-title">${age_group}</p>
          <p class="card_text">${description}</p>
          <p class="card_avter">${author}</p>
          </div>
          <div class="div_svg-card">
          <a href="#">
            <img src="./src/card/amazon-desktop.png"
                srcset="./src/card/amazon-desktop.png 1x, ./src/card/amazon-desktop@2x.png 2x"
                alt="">
            </a>
            <a href="#">
            <img src="./src/card/book-desktop.png"
                srcset="./src/card/book-desktop.png 1x, ./src/card/book-desktop@2x.png 2x"
                alt="">
            </a>
            <a href="#">
            <img src="./src/card/bookShop-desktop.png"
                srcset="./src/card/bookShop-desktop.png 1x, ./src/card/bookShop-desktop@2x.png 2x"
                alt="">
            </a>
            <div class="div-card_close">
            <a href="#">
            <svg class="" width="34" height="34">
                <use href="#"></use>
            </svg>
            </a>
            </div>  
      </li>
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
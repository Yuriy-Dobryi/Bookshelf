const shoppingListEl = document.querySelector('.shopping-list');

function createImgCardsMarkup() {
  shoppingListEl.innerHTML = shoppingList
    .map(() => {
      return `<li class="gallery__item">
          <a class="gallery__link" href="large-image.jpg">
              <img
              class="gallery__image"
              src=""
              alt=""
              />
          </a>
          <div class="div_card">
          <h2 class="title_card">I will find you</h2>
          <p class="card_min-title">Hardcover fiction</p>
          <p class="card_text">David Burroughs was once a devoted father to his three-year-old son Matthew, living a dream life just a short drive away from the working-class suburb where he and his wife, Cheryl, first fell in love--until one fateful night when David woke suddenly to discover Matthew had been murdered while David was asleep just down the hall.</p>
          <p class="card_avter">Harlan Coben</p>
          </div>
          <div class="div_svg-card">
          <a href="#">
            <svg class="" width="48" height="15">
                <use href="./img/sprite.svg#icon-amazon"></use>
            </svg>
            </a>
            <a href="#">
            <svg class="" width="48" height="15">
                <use href="./img/sprite.svg#icon-book"></use>
            </svg>
            </a>
            <a href="#">
            <svg class="" width="48" height="15">
                <use href="./img/sprite.svg#icon-bookshop"></use>
            </svg>
            </a>
            <div class="div-card_close">
            <a href="#">
            <svg class="" width="34" height="34">
                <use href="#"></use>
            </svg>
            </a>
            </div>

      </li>`;
    })
    .join('');
}

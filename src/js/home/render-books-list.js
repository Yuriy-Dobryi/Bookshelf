import FetchCategoriesAll from './service-categories-all';

const fetchApiCategories = new FetchCategoriesAll();

const booksList = document.querySelector('.books-list')

const renderBooksList = async () => {
  const categoriesTop = await fetchApiCategories.getCategoriesTop();
  booksList.innerHTML = '';

  categoriesTop.forEach(category => {
    const books = category.books.map(book => {
      return `
      <div class="book-card" data-book-id="${book._id}">
          <img src="${book.book_image}" alt="${book.title}">
          <div class="book-info">
            <h3>${book.title}</h3>
            <p>${book.author}</p>
          </div>
        </div>
      `;
    }).join('');

    const categorySection = `
    <section class="category-section">
      <h2>${category.list_name}</h2>
      <div class="books-container">
        ${books}
      </div>
      <button type=button>SEE MORE</button>
    </section>`;

    booksList.insertAdjacentHTML('beforeend', categorySection);
  });
  booksList.addEventListener('click', event => {
    const bookCard = event.target.closest('.book-card');
    const bookId = bookCard.dataset.bookId;
    console.log(bookId);
  });
};

renderBooksList();

// fetchApiCategories.getCategoriesList().then(res => console.log(res));

// fetchApiCategories.getCategoriesTop().then(res => console.log(res));

// fetchApiCategories
//   .getCategoriesSelected('Business Books')
//   .then(res => console.log(res));

// fetchApiCategories
//   .getBookId('643282b1e85766588626a087')
//   .then(res => console.log(res));


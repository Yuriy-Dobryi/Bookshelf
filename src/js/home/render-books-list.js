import FetchCategoriesAll from './service-categories-all';
import { requestCard } from './modal-card';
import { checkCurrentCategory } from './render-categories-list';

const viewportWidth = window.innerWidth;
let booksPerCategory = 5;

if (viewportWidth < 1440 && viewportWidth >= 768) {
  booksPerCategory = 3;
} else if (viewportWidth < 768) {
  booksPerCategory = 1;
}

const fetchApiCategories = new FetchCategoriesAll();

const booksList = document.querySelector('.books-list');

export const renderBooksList = async () => {
  const categoriesTop = await fetchApiCategories.getCategoriesTop();
  booksList.innerHTML = '';

  categoriesTop.forEach(category => {
    const books = category.books
      .slice(0, booksPerCategory)
      .map(book => {
        return `  
        <div class="book-card" data-book-id="${book._id}">
          <img src="${book.book_image}" alt="${book.title}" class="book-image">
          <div class="book-info">
            <h3 class="book-title">${book.title}</h3>
            <p class="book-autor">${book.author}</p>
          </div>
        </div>
      `;
      })
      .join('');

    const categorySection = `
    <section class="category-section">
      <h1  class="books-list-title">Best Sellers <span class="span-books-list-title">Books</span></h1>
      <h2>${category.list_name}</h2>
      <div class="books-container">
        ${books}
      </div>
      <button type=button data-category-books="${category.list_name}" class="category-books-button">SEE MORE</button>
    </section>`;

    booksList.insertAdjacentHTML('beforeend', categorySection);
  });

  booksList.addEventListener('click', event => {
    const bookCard = event.target.closest('.book-card');
    if (bookCard) {
      const bookId = bookCard.dataset.bookId;
      console.log(bookId);
      // requestCard(bookId);
    }
  });

  booksList.addEventListener('click', async event => {
    if (event.target.classList.contains('category-books-button')) {
      const category = event.target.dataset.categoryBooks;
      console.log(category);
      renderBooksListCategori(category);
      checkCurrentCategory(category);
    }
  });
};

renderBooksList();

export const renderBooksListCategori = async category => {
  const booksListCategori = await fetchApiCategories.getCategoriesSelected(
    category
  );
  booksList.innerHTML = '';

  const booksTitle = category.split(' ');
  const booksTitleLast = booksTitle.pop();
  const booksTitleFirst = booksTitle.join(' ');

  const books = booksListCategori
    .map(book => {
      return `
    <div class="book-card" data-book-id="${book._id}">
        <img src="${book.book_image}" alt="${book.title}" class="book-image">
        <div class="book-info">
          <h3 class="book-title">${book.title}</h3>
          <p class="book-autor">${book.author}</p>
        </div>
    </div>
    `;
    })
    .join('');

  const booksSection = `
    <section class="category-section">
      <h1  class="books-list-title">${booksTitleFirst} <span class="span-books-list-title">${booksTitleLast}</span></h1>
      <div class="books-container">
        ${books}
      </div>
    </section>
  `;

  booksList.insertAdjacentHTML('beforeend', booksSection);

  window.scrollTo(0, 0);
};

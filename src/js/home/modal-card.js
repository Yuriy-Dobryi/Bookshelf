export async function openCardModal(selectedBook) {
  
  const bookList = JSON.parse(localStorage.getItem('SHOPPING-BOOKS-LIST'))

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
function findAuthorById(authors, id) {
  return authors.find(author => author.id === id)
}

function findBookById(books, id) {
  return books.find(book => book.id === id)
}

function partitionBooksByBorrowedStatus(books) {
  let partitionedBooks = [];
  const booksBorrowed = books.filter((book) => book.borrows[0].returned===false);
  const booksNotBorrowed = books.filter((book) => book.borrows[0].returned===true);
  partitionedBooks.push(booksBorrowed, booksNotBorrowed);
  return partitionedBooks
}

function getBorrowersForBook(book, accounts) {
  const bookBorrows = book.borrows
  const borrowersForBook = bookBorrows.map(borrow => {
    const found = accounts.find(account => account.id === borrow.id)
    return {...found, ...borrow}
  });
  return borrowersForBook.slice(0, 10);
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};

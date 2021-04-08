function findAccountById(accounts, id) {
  return accounts.find(name => name.id === id);
}

function sortAccountsByLastName(accounts) {
  return accounts.sort((a,b) => a.name.last.toLowerCase() > b.name.last.toLowerCase() ? 1 : -1); 
}

function getTotalNumberOfBorrows(account, books) {
  let result = books.reduce( (acc, book) => {
    let borrows = book.borrows
    let numberOfIdAppearances = 0
    for (let objects of borrows) {
      if (objects.id === account.id) {
        numberOfIdAppearances += 1
      }
    }
    acc+= numberOfIdAppearances
    return acc
  } , 0)
  return result
}

function getBooksPossessedByAccount(account, books, authors) {
  return books.filter((book) => {
    const recent = book.borrows[0];
    return !recent.returned && recent.id === account.id;
  }).map((book) => {
    const author = authors.find((author) => author.id === book.authorId);
    return { ...book, author };
  });
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};

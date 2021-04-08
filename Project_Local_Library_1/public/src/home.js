function returnLength(item){
  return item.length
}

function getTotalBooksCount(books) {
  return returnLength(books)
}

function getTotalAccountsCount(accounts) {
  return returnLength(accounts)
}

function getBooksBorrowedCount(books) {
  let booksBorrowed = books.filter((book) =>
  book.borrows.find((borrow) => borrow.returned===false));
  return returnLength(booksBorrowed);
}
 
function getMostCommonGenres(books) {
  let obj = books.reduce((acc, book) => {
    if(acc[book.genre]) {
      acc[book.genre] += 1
    } else {
      acc[book.genre] = 1
    }
    return acc
  } , {})
  let arr = []
  for (let category in obj) {
    let count = obj[category]
    arr.push({name: category, count} )
  }
  let sorted = arr.sort((genreA, genreB) => genreB.count - genreA.count)
  return sorted.slice(0, 5)
}



function getMostPopularBooks(books) {
  //simple sort books at borrows.length
  return books.sort((a,b) => {
    if(a.borrows.length > b.borrows.length){
      return -1;
    }else{
      return 1;
    }
  
  }).slice(0,5).map((book) => {return{name: book.title, count: book.borrows.length}})
}

function getMostPopularAuthors(books, authors) {
  let obj = books.reduce((acc, book) => {
    const author = authors.find(author => author.id === book.authorId)
    const authorName = `${author.name.first} ${author.name.last}`
    if(acc[authorName]) {
      acc[authorName].count += book.borrows.length;
    } else {
      acc[authorName] =  {name: authorName, count: book.borrows.length};
    }
    return acc;
  } , {});
  let sortedAuthors = Object.values(obj).sort((a,b) => b.count - a.count).slice(0,5)
  return sortedAuthors
}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};

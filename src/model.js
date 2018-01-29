const uuid = require('uuid/v4')


const books = [
  {
    id: 12345,
    title: "The Blue Sword",
    author: "Robin McKinley",
  },{
    id: 12346,
    title: "The Hero and the Crown",
    author: "Robin McKinley",
  },{
    id: 12347,
    title: "Harry Potter and the Prisoner of Azkaban",
    author: "JK Rowling",
  },{
    id: 12348,
    title: "Harry Potter and the Goblet of Fire",
    author: "JK Rowling",
  },{
    id: 12349,
    title: "The Grapes of Wrath",
    author: "John Steinbeck",
  },{
    id: 12350,
    title: "The Sun Also Rises",
    author: "Ernest Hemingway",
  }
]

var getAllBooks = () => { return books }

var getBookByID = (id) => {
  return books.find(book => book.id === id)
}
var createBook = (title, author) => {
  var newbook = { id: uuid(), title, author }
  books.push(newbook)
  return newbook
}

var updatingBook = (id, body) => {
  var book = books.find(book => book.id === id);
  if (book) {
    book.title = body.title
    book.author = body.author
  }
  return book;
}

var deletingBook = (id) => {
  var book = books.find(book => book.id === id);
  if (book) {
    var index = books.indexOf(book)
    books.splice(index, 1)
  }
  return book
}

module.exports = {
  getAllBooks,
  getBookByID,
  createBook,
  updatingBook,
  deletingBook
}
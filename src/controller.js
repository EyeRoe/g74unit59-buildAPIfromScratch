var model = require('./model.js')

var allBooks = (req, res, next) => {
  res.json({ data: model.getAllBooks() })
}

var singleBook = (req, res, next) => {
  const id = req.params.id
  const book = model.getBookByID(id)
  if (!book) return next({ status: 404, message: `Could not find book with id of ${id}` })

  res.json({ data: book })
}
var postBook = (req, res, next) => {
  const { title, author } = req.body
  if (!title || !author) return next({ status: 400, message: `Fields title and author are required` })
  const book = model.createBook(title, author)
  res.status(201).json({ data: book })
}

var updateBook = (req, res, next) => {
  const id = req.params.id
  const book = model.updatingBook(id, req.body)
  if (!book) return next({ status: 404, message: `Could not find book with id of ${id}` })
  const { title, author } = req.body
  if (!title || !author) return next({ status: 400, message: `Fields title and author are required` })
  res.status(200).json({ data: book })
}

var deleteBook = (req, res, next) => {
  const id = req.params.id
  const book = model.adopted(id)
  if (!book) return next({ status: 404, message: `Could not find book with id of ${id}` })
  res.status(204).json()
}

module.exports = {
  allBooks,
  singleBook,
  postBook,
  updateBook,
  deleteBook,
}
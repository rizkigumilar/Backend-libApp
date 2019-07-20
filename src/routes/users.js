const express = require('express')
const Route = express.Router()

const book = require('../controller/books')
const borrow = require('../controller/borrow');

Route
  .get('/book', book.getAllBooks)
  .get('/book/:idBook', book.listById)
  .get('/book/search', book.searchBooks)
  .post('/book', book.addBook)
  .patch('/book/:idBook', book.updateBook)
  .delete('/:idBook', book.deleteBook)

  .get('/borrow', borrow.getAll)
  .post('/borrow', borrow.post)
  .patch('/borrow/:idBook', borrow.update)


module.exports = Route
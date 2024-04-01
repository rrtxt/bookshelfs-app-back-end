const { AddNewBookHandler, GetAllBooksHandler, GetBookByIdHandler, EditBookHandler, DeleteBookByIdHandler } = require('./handler')

const routes = [
    {
        method: 'POST',
        path: '/books',
        handler: AddNewBookHandler
    },
    {
        method: 'GET',
        path: '/books',
        handler: GetAllBooksHandler
    },
    {
        method: 'GET',
        path: '/books/{bookId}',
        handler: GetBookByIdHandler
    },
    {
        method: 'PUT',
        path: '/books/{bookId}',
        handler: EditBookHandler
    },
    {
        method: 'DELETE',
        path: '/books/{bookId}',
        handler: DeleteBookByIdHandler
    }
]

module.exports = routes

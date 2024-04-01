const { AddNewBookHandler, GetAllBooksHandler, GetBookByIdHandler } = require('./handler')

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
    }
]

const EditBookHandler = (request, h) => {
    const { bookId } = request.params
}

module.exports = routes

const { AddNewBook } = require('./handler')

const routes = [
    {
        method: 'POST',
        path: '/books',
        handler: AddNewBook
    }
]

module.exports = routes

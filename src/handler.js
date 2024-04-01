const { nanoid } = require('nanoid')
const books = require('./books')

const AddNewBookHandler = (request, h) => {
    const { name, year, author, summary, publisher,
        pageCount, readPage, reading } = request.payload

    const id = nanoid(16)

    const finished = (readPage === pageCount)

    const insertedAt = new Date().toISOString()
    const updatedAt = insertedAt

    if (name === undefined || name === '') {
        const response = h.response({
            status: 'fail',
            message: 'Gagal menambahkan buku. Mohon isi nama buku'
        })
        response.code(400)
        return response
    }

    if (readPage > pageCount) {
        const response = h.response({
            status: 'fail',
            message: 'Gagal menambahkan buku. readPage tidak boleh lebih besar dari pageCount'
        })
        response.code(400)
        return response
    }

    const newBook = {
        id,
        name,
        year,
        author,
        summary,
        publisher,
        pageCount,
        readPage,
        finished,
        reading,
        insertedAt,
        updatedAt
    }

    books.push(newBook)

    const isSuccess = books.filter((book) => book.id === id).length > 0
    if (isSuccess) {
        const response = h.response({
            status: 'success',
            message: 'Buku berhasil ditambahkan',
            data: {
                bookId: id
            }
        })
        response.code(201)
        return response
    }
}

const GetAllBooksHandler = (request, h) => {
    const response = h.response({
        status: 'success',
        data: {
            books
        }
    })
    response.code(200)
    return response
}

const GetBookByIdHandler = (request, h) => {
    const { bookId } = request.params

    const book = books.filter((book) => book.id === bookId)[0]

    if (!book) {
        const response = h.response(
            {
                status: 'fail',
                message: 'Buku tidak ditemukan'
            }
        )
        response.code(404)
        return response
    }

    const response = h.response({
        status: 'success',
        data: {
            book
        }
    })
    response.code(200)
    return response
}

module.exports = { AddNewBookHandler, GetAllBooksHandler, GetBookByIdHandler }
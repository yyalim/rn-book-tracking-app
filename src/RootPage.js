import React from 'react'
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'
import BookShelf from './BookShelf'

const RootPage = ({ books, onShelfUpdate }) => {
  const currentlyReading = books
    .filter(book => book.shelf === 'currentlyReading')

  const wantToRead = books
    .filter(book => book.shelf === 'wantToRead')

  const read = books
    .filter(book => book.shelf === 'read')

  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        <div>
          <BookShelf
            title="Currently Reading"
            books={currentlyReading}
            onShelfUpdate={onShelfUpdate}
          />
          <BookShelf
            title="Want to Read"
            books={wantToRead}
            onShelfUpdate={onShelfUpdate}
          />
          <BookShelf
            title="Read"
            books={read}
            onShelfUpdate={onShelfUpdate}
          />
        </div>
      </div>
      <div className="open-search">
        <Link
          to="/search"
        >Add a book</Link>
      </div>
    </div>
  )
}

RootPage.propTypes = {
  onShelfUpdate: PropTypes.func.isRequired,
  books: PropTypes.array.isRequired
}

export default RootPage
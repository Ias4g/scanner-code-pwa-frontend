import React from 'react'
import PropTypes from 'prop-types'
import StarRatings from 'react-star-ratings'
import { Link } from 'react-router-dom'
import { MdArrowBack } from 'react-icons/md'

import { Container, Cover } from './styles'

const Info = ({ book }) => {
  return (
    <Container>
      <Link className="go-back" to="/">
        <MdArrowBack size="32" color="#2ecc71" />
      </Link>
      <Cover src={book.coverImage} />
      <div className="name-author">
        <h1 className="name">{book.name}</h1>
        <h2 className="author">by{' '}{book.author}</h2>
      </div>
      <div className="book-ratings">
        <StarRatings
          rating={book.rating}
          starRatedColor="#f1c40f"
          starDimension="18"
          starSpacing="0"
        />{' '}({book.rating})
      </div>
      <div className="price">
        De <span className="discount">R${Number(book.price).toFixed(2)}</span> por <b>R${Number(book.promotionalPrice).toFixed(2)}</b>
      </div>
    </Container>
  )
}

Info.propTypes = {
  book: PropTypes.shape({
    name: PropTypes.string,
    rating: PropTypes.number,
    promotionalPrice: PropTypes.number,
    price: PropTypes.number,
    coverUrl: PropTypes.string
  }).isRequired
}

export default Info

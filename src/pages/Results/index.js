import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import StarRatings from 'react-star-ratings'
import { MdArrowForward } from 'react-icons/md'

import { getBook } from '../../services/books'

import { Container, Wrapper, Cover, Info, ActionButton } from './styles'

function Results({ isbn }) {
  const [book, setBook] = useState()
  useEffect(() => {
    const loadBook = async () => {
      try {
        const res = await getBook(isbn)
        setBook(res)
      } catch (e) {
        if (e.response && e.response.status === 404) {
          console.info("ISBN não cadastrado, tente outro código.", e)
          alert("Book not found! try again.")
          return
        } else {
          console.error("Error: Não foi possivel recumperar os dados do servidor.", e)
          alert("Error: Unable to recover server data")
          return
        }
      }
    }

    loadBook()
  }, [isbn])
  return (
    <Container>
      {book && (
        <Link to={`/book-details/${isbn}`}>
          <Wrapper>
            <Cover src={book.coverImage} />
            <Info>
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
                />
                {' '}({book.rating})
              </div>
              <div className="price">
                De <span className="discount">R${Number(book.price).toFixed(2)}</span> por <span>R${Number(book.promotionalPrice).toFixed(2)}</span>
              </div>
            </Info>
            <ActionButton>
              <span className="button">
                <MdArrowForward size={32} color="#fff" />
              </span>
            </ActionButton>
          </Wrapper>
        </Link>
      )}
    </Container>
  )
}

Results.propTypes = {
  isbn: PropTypes.string.isRequired
}

export default Results

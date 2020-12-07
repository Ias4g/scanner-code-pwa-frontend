import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getBook } from '../../services/books'
import Extras from './Extras'
import GeneralScore from './GeneralScore'
import Info from './Info'
import Scores from './Scores'
import { Container } from './styles'

function BookDetails() {
  const { isbn } = useParams()
  const [book, setBook] = useState('')

  useEffect(() => {
    const loadBook = async () => {
      const res = await getBook(isbn)
      setBook(res)
    }

    loadBook()
  }, [isbn])

  return (
    <>
      {
        book.isbn && (
          <Container>
            <Info book={book} />
            <GeneralScore book={book} />
            <Scores book={book} />
            <Extras book={book} />
          </Container>
        )
      }
    </>
  )
}

export default BookDetails

import PropTypes from 'prop-types'
import React from 'react'
import { Container } from './styles'

const Extras = ({ book }) => {
  return (
    <>
      <Container>
        <span className="title">Tecnologia:</span>
        <p>{book.tecnologies && book.tecnologies.join(', ')}</p>
      </Container>
      <Container>
        <span className="title">Requisitos:</span>
        <p>{book.requirements && book.requirements.join(', ')}</p>
      </Container>
      <Container>
        <span className="title">Descrição:</span>
        <p>{book.descriptions}</p>
      </Container>
    </>
  )
}

Extras.propTypes = {
  book: PropTypes.shape({
    descriptions: PropTypes.string,
    tecnologies: PropTypes.array,
    requirements: PropTypes.array
  }).isRequired
}

export default Extras


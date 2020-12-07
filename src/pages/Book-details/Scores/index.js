import PropTypes from 'prop-types'
import React from 'react'
import { calculateScore } from '../../../services/books'
import { Container, Score, Value } from './styles'

function Scores({ book }) {
  return (
    <Container>
      {book.scores && book.scores.map(scor => (
        <Score
          key={scor.name}
          scoreColor={calculateScore(scor.value).color}
        >
          <Value scoreColor={calculateScore(scor.value).color}>
            <b className="value">{Number(scor.value).toFixed(1)}</b>
          </Value>
          <b className="label">{scor.name}</b>
        </Score>
      ))}
    </Container>
  )
}

Scores.propTypes = {
  book: PropTypes.shape({
    scores: PropTypes.array
  }).isRequired
}

export default Scores


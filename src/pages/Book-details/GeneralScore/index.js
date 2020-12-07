import PropTypes from 'prop-types'
import React from 'react'
import { Container } from './styles'
import { calculateScore } from '../../../services/books'

const GeneralScore = ({ book }) => {
  const {
    color,
    label,
    recommended
  } = calculateScore(book.score)

  return (
    <Container scoreColor={color}>
      <div className="score">
        <b className="summary-score-value">{Number(book.score).toFixed(1)}</b>
        <b>{label}</b>
      </div>
      {recommended && (
        <p className="score-comment">Recomendado pelo editores</p>
      )}
    </Container>
  )
}

GeneralScore.propTypes = {
  book: PropTypes.shape({
    score: PropTypes.number
  }).isRequired
}

export default GeneralScore

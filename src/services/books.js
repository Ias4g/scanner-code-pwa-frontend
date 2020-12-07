import api from './api'

export const validateIsbn = isbn => {
  if (isbn.length !== 13 || isbn.substring(0, 3) !== '978') {
    return false
  }

  const isbnDigit = parseInt(isbn[isbn.length - 1])
  let multiplier = 0

  const isbnSum = isbn
    .substring(0, 12)
    .split('')
    .reduce((total, num) => {
      multiplier = multiplier === 1 ? 3 : 1
      return total + parseInt(num) * multiplier
    }, 0)

  const validDigit = 10 - (isbnSum % 10)

  return isbnDigit === validDigit
}

export const calculateScore = score => {
  let result = {}
  let notas

  if (score < 1) {
    notas = "Péssimo"
  } else if ((score >= 1) && (score < 2.5)) {
    notas = "Ruim"
  } else if ((score >= 2.5) && (score < 3.5)) {
    notas = "Razoável"
  } else if ((score >= 3.5) && (score < 4.5)) {
    notas = "Bom"
  } else {
    notas = "Excelente"
  }

  switch (notas) {
    case "Excelente":
      result = { color: '#2ecc71', label: 'Excelente', recommended: true }
      break

    case "Bom":
      result = { color: '#f1c40f', label: 'Bom', recommended: false }
      break

    case "Razoável":
      result = { color: '#e67e22', label: 'Razoável', recommended: false }
      break

    case "Ruim":
      result = { color: '#d35400', label: 'Ruim', recommended: false }
      break

    case "Péssimo":
      result = { color: '#c0392b', label: 'Péssimo', recommended: false }
      break
  }

  return result
}

export const getBook = async isbn => {
  const res = await api.get(`/show-book/${isbn}`)
  return res.data
}

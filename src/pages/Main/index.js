import React, { useState } from 'react';

import Scanner from '../Scanner';
import Results from '../Results'

function Main() {
  const [isbn, setIsbn] = useState('')

  return (
    <>
      <Scanner onScann={setIsbn} />
      {isbn && <Results isbn={isbn} />}
    </>
  )
}

export default Main;
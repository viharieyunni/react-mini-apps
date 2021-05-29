import React, { useState } from 'react'

// Always has  "USE" before
//use case component name should be uppercase
// Cannot call hook conditionally

const UseStateBasics = () => {
  const [text, setText] = useState('Random Variable')

  const handleClick = () => {
    if (text === 'Random Variable') {
      setText('Hello World')
    } else {
      setText('Random Variable')
    }
  }
  return (
    <React.Fragment>
      <h2>{text}</h2>
      <button type='button' className='btn' onClick={handleClick}>
        Change Title
      </button>
    </React.Fragment>
  )
}

export default UseStateBasics

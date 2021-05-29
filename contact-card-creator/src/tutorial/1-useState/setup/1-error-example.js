import React from 'react'

const ErrorExample = () => {
  let title = 'Random variable'
  const handleClickfunction = () => {
    title = 'Hello People'
    console.log(title)
  }

  return (
    <React.Fragment>
      <h2>{title}</h2>
      <button type='button' className='btn' onClick={handleClickfunction}>
        Change Title
      </button>
    </React.Fragment>
  )
}

export default ErrorExample

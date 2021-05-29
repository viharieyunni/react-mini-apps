import React, { useState } from 'react'

const UseStateObject = () => {
  const [person, setPerson] = useState({
    // if we use objects such as below and we would want to change them dynamically using a "Use State" function, then we would have to use a spread operator.
    name: 'vihari',
    age: 25,
    message: 'random message',
  })

  const [name, setName] = useState('Peter')
  const [age, setAge] = useState(24)
  const [message, setMessage] = useState('random')

  const changeMessage = () => {
    //setPerson({ ...person, message: 'Hello World' })
    setMessage('Hello World')
    setName('Vihari')
    setAge('25')
  }
  console.log(person)
  return (
    <>
      <h3>{/*person.*/ name}</h3>
      <h3>{/*person.*/ age}</h3>
      <h3>{/*person.*/ message}</h3>
      <button type='button' className='btn' onClick={changeMessage}>
        change Message
      </button>
    </>
  )
}

export default UseStateObject

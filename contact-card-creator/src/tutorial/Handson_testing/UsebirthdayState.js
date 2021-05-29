import React, { useState } from 'react'
import { data } from './data'

const UsebirthdayState = () => {
  const [people, setPeople] = useState(data)
  const clearall = () => {
    setPeople([])
  }
  return (
    <>
      <div
        style={{
          width: '300px',
          border: '2px solid green',
          padding: '50px',
          margin: '100px',
          backgroundColor: 'white',
        }}
      >
        <h3>5 birthdays today</h3>
        {people.map((person) => {
          const { id, name, age } = person
          return (
            <section>
              <article>
                <div>
                  <div>
                    <h4>{name}</h4>
                    <p>{age}</p>
                  </div>
                </div>
              </article>
            </section>
          )
        })}
        <button type='button' className='btn' onClick={clearall}>
          {' '}
          Clear all
        </button>
      </div>
    </>
  )
}

export default UsebirthdayState

import * as React from 'react'
import { useState } from 'react'

function Hello() {
  const [name, setName] = useState('Mary')
  const [surname, setSurname] = useState('lili')
  return (
    <div>
      <p>{ name } + { surname }</p>
      <button onClick={() => setName('1')}>
        set name
      </button>
      <button onClick={() => setSurname('2')}>
        set surname 
      </button>
    </div>
  )
}

export default Hello
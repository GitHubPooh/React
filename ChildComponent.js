import React from 'react'

function ChildComponent(props) {
  return (
    <button onClick={()=>props.greetHandler('Anvee')}>Greet Parent</button>
  )
}

export default ChildComponent
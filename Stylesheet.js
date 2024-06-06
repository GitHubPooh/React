import React from 'react'
import './MyStyles.css'

function Stylesheet(props) {
   let className = props.primary ? 'primary' : ''
  return (
    <div>
        <h1 className={`${className} fontxl`}> Stylesheet </h1>
    </div>
  )
}

export default Stylesheet
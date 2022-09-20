import React from 'react'
import './display.scss'

function Displayfive(props) {
  return (
    <div className='displaytext'>
      <div className="text">
        <h2>{props.title}</h2>

        <p>{props.desc}</p>
      </div>
    </div>
  )
}

export default Displayfive
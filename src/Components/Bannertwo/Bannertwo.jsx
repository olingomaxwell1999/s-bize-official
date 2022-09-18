import React from 'react'
import './bannertwo.scss'

function Bannertwo(props) {
  return (
    <div style={{
          backgroundImage: `url(${props.bg})`
        }} className='bannertwo'>
        <div className="overlay"></div>
        <h1>{props.title}</h1>
    </div>
  )
}

export default Bannertwo
import React from 'react'
// import { Link } from 'react-router-dom'
import './button.css'

function Button(props) {
  return (
      <button className='cta-btn'>
        <a href={props.title} target="_blank" rel="noreferrer">
          {props.title}
        </a>
      </button>
  )
}

export default Button
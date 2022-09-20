import React from 'react'
import { Link } from 'react-router-dom'
import './button.css'

function Button(props) {
  return (
    <Link to='https://www.nairobits.com/apply'>
      <button className='cta-btn'>{props.title}</button>
    </Link>
  )
}

export default Button
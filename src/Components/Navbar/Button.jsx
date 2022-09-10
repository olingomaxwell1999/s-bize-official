import React from 'react'
import { Link } from 'react-router-dom'
import './button.css'

function Button() {
  return (
    <Link to='https://www.nairobits.com/apply'>
      <button className='btn'>Apply</button>
    </Link>
  )
}

export default Button
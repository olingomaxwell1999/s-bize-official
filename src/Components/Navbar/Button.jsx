import React from 'react'
import { Link } from 'react-router-dom'
import './button.css'

function Button() {
  return (
    <Link to='https://www.nairobits.com/apply'>
      <button className='cta-btn'>Apply Now</button>
    </Link>
  )
}

export default Button
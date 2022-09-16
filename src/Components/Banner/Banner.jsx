import React from 'react'
import './banner.scss'
// import {Link} from 'react-router-dom'

function Banner() {
  return (
    <div className='hero'>
      <div className="overlay is-overlay"></div>
      <div className="container">
        
        <div className="hero-content is-overlay">
          <h1 className='title is-size-1'>The NairoBits S-Bize Program</h1>

          <p>Leveraging academic genius to promote local organizations with a strong impact in Kenyan communities</p>

          <button className="button">meet the 2022 Cohort</button>
        </div>
      </div> 
    </div>
  )
}

export default Banner
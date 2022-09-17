import React from 'react'
import './banner.scss'
import {Link} from 'react-router-dom'

function Banner() {
  return (
    <div className='section bannerone' id='banner'>
      <div className="overlay is-overlay"></div>
      <div className="container">
        
        <div className="hero-content is-overlay">
          <h1 className='title is-size-1'>The NairoBits S-Bize Program</h1>

          <p>Leveraging academic genius to promote local organizations with a strong impact in Kenyan communities</p>

          <button className="btn">
            <Link to='/cohorts'>Meet the cohorts</Link>
          </button>
        </div>
      </div> 
    </div>
  )
}

export default Banner
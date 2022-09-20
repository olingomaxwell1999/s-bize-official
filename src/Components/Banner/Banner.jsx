import React from 'react'
import './banner.scss'
import {Link} from 'react-router-dom'
import {motion} from 'framer-motion'

function Banner() {
  return (
    <motion.div initial={{x:-500, opacity:0, scale:0.5}} animate={{x:0, opacity:1, scale:1}} transition={{duration:.5}}  className='section bannerone' id='banner'>
      <div className="overlay is-overlay"></div>
      <div className="container">
        
        <div className="hero-content is-overlay">
          <h1 className='title is-size-1'>The NairoBits S-Bize Program</h1>

          <p>Leveraging academic genius to promote local organizations with a strong impact in Kenyan communities</p>

          <button className="btn">
            <Link style={{color: 'white'}} to='/cohorts'>Meet the cohorts</Link>
          </button>
        </div>
      </div> 
    </motion.div>
  )
}

export default Banner
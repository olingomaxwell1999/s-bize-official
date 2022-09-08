import React from 'react'
import About from '../Components/Aboutus/About'
import Banner from '../Components/Banner/Banner'

function Homepage() {
  return (
    <div className='home'>
      <Banner/>

      <About/>
    </div>
  )
}

export default Homepage
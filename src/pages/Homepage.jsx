import React from 'react'
import About from '../Components/Aboutus/About'
import Banner from '../Components/Banner/Banner'
import Infovideo from '../Components/Infovideo/Infovideo'
import Testimonials from '../Components/Testimonials/Testimonials'

function Homepage() {

  return (
    <div className='home'>
      <Banner/>

      <About/>

      <Infovideo/>

      <Testimonials/>
    </div>
  )
}

export default Homepage
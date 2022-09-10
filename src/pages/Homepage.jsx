import React from 'react'
import About from '../Components/Aboutus/About'
import Banner from '../Components/Banner/Banner'
import Infovideo from '../Components/Infovideo/Infovideo'
import Whyus from '../Components/Whyus/Whyus'

function Homepage() {
  return (
    <div className='home'>
      <Banner/>

      <About/>

      <Infovideo/>

      <Whyus/>

      <Infovideo/>
    </div>
  )
}

export default Homepage
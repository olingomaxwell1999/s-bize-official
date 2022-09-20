import React,{useEffect} from 'react'
import About from '../Components/Aboutus/About'
import Banner from '../Components/Banner/Banner'
import Infovideo from '../Components/Infovideo/Infovideo'
import Testimonials from '../Components/Testimonials/Testimonials'
import AOS from 'aos'
import 'aos/dist/aos.css'

function Homepage() {

  useEffect(() => {
    AOS.init({duration:2000})
  })

  return (
    <div className='home'>
      <Banner/>

      <About data-aos='fade-up'/>

      <Infovideo/>

      <Testimonials/>
    </div>
  )
}

export default Homepage
import React,{useEffect} from 'react'
import photo from '../../assets/testimony.png'
import './testimonial.scss'
import AOS from 'aos'
import 'aos/dist/aos.css'

function Testimonials() {
  useEffect(() => { 
    AOS.init({duration:2000})
  })
  return (
    <div className="testimony">
        <div className="img" data-aos='fade-up'>
            <img src={photo} alt="testimony one" />
        </div>

        <div className="text" data-aos='fade-up'>
            <h1 className="title">Testimonials</h1>

            <p>Wanawake kwa Wanawake works with children, youth, and women from the Kibera community. We worked with the MBA students from LSE in one of our empowerment projects and they were a great help in shaping its business model through participatory actions.<br/> Thank you NairoBits.</p>

            <button className='btn'>Wanawake Kwa Wanawake</button>
        </div>

    </div>
  )
}

export default Testimonials
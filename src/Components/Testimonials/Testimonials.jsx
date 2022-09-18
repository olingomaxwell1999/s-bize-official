import React from 'react'
import photo from '../../assets/banner1.JPG'
import './testimonial.scss'

function Testimonials() {
  return (
    <div className="testimony">
        <div className="img">
            <img src={photo} alt="testimony one" />
        </div>

        <div className="text">
            <h1 className="title">Testimonials</h1>

            <p>Wanawake kwa Wanawake works with children, youth, and women from the Kibera community. We worked with the MBA students from LSE in one of our empowerment projects and they were a great help in shaping uts business model through participatory actions. Thank you NairoBits.</p>

            <button className='btn'>Wanawake Kwa Wanawake</button>
        </div>

    </div>
  )
}

export default Testimonials
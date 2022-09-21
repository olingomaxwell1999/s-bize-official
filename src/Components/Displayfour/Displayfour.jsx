import React,{useEffect} from 'react'
import Video from '../Video/Video'
import './display.scss'
import AOS from 'aos'
import 'aos/dist/aos.css'

function Displayfour(props) {

  useEffect(() => {
    AOS.init({duration:2000})
  })

  return (
    <div className='display'>
      <div className="text" data-aos='fade-up'>
        <h2>{props.title}</h2>

        <p>{props.desc}</p>

        <button className="btn">
          <a href={props.link} target='_blank' rel='noreferrer'>Explore More</a>
        </button>
      </div>

      <div className="video" data-aos='fade-up'>
        <Video embedId='F8Z9-6VL7k4'/>
      </div>
    </div>
  )
}

export default Displayfour
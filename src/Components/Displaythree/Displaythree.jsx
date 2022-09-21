import React,{useEffect} from 'react'
import Video from '../Video/Video'
import './display.scss'
import AOS from 'aos'
import 'aos/dist/aos.css'

function Displaythree(props) {
  useEffect(() => { 
    AOS.init({duration:2000})
  })
  return (
    <div className='displayon'>
      <div className="text" data-aos='fade-up'>
        <h2>{props.title}</h2>

        <p>{props.desc}</p>

        <button className="btn">
          <a style={{color: 'white'}} href={props.link} target='_blank' rel='noreferrer'>Explore More</a>
        </button>
      </div>

      <div className="video" data-aos='fade-up'>
        <Video embedId='H3GU7vFNuUI'/>
      </div>
    </div>
  )
}

export default Displaythree
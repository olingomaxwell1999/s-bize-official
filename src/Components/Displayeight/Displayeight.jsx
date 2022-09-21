import React,{useEffect} from 'react'
import Video from '../Video/Video'
import './display.scss'
import AOS from 'aos'
import 'aos/dist/aos.css'

function Displayeight(props) {
  useEffect(() => { 
    AOS.init({duration:2000})
  })
  return (
    <div className='displayeight'>
      <div className="video" data-aos='fade-up'>
        <Video embedId='ANdkYtgDaJw'/>
      </div>
      <div className="text" data-aos='fade-up'>
        <h2>{props.title}</h2>

        <p>{props.desc}</p>
      </div>
    </div>
  )
}

export default Displayeight
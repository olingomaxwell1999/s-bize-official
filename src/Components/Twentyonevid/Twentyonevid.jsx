import React,{useEffect} from 'react'
import './twentyvid.scss'
import Video from '../Video/Video'
import AOS from 'aos'
import 'aos/dist/aos.css'

function Twentyvid(props) {

  useEffect(() => {
    AOS.init({duration:2000})
  })

  return (
    <div className='twentyvideo'>

        <div className="main">

          <div className="video" data-aos='fade-up'>
            <Video embedId='bYeGX2iGo7Y' />
          </div>

          <div className="text" data-aos='fade-up'>
            <p>{props.text}</p>
          </div>
        </div>
    </div>
  )
}

export default Twentyvid
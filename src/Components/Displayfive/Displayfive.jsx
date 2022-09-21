import React,{useEffect} from 'react'
import './display.scss'
import AOS from 'aos'
import 'aos/dist/aos.css'

function Displayfive(props) {
  useEffect(() => {
    AOS.init({duration:2000})
  })
  return (
    <div className='displaytext'>
      <div className="text" data-aos='fade-up'>
        <h2>{props.title}</h2>

        <p>{props.desc}</p>
      </div>
    </div>
  )
}

export default Displayfive
import React,{useEffect} from 'react'
import './displaytwo.scss'
import AOS from 'aos'
import 'aos/dist/aos.css'

function Displaytwo(props) {
  useEffect(() => {
    AOS.init({duration:2000})
  })
  return (
    <div className='displayo'>

      <div className="video" data-aos='fade-up'>
        <img src={props.img} alt="" />
      </div>

      <div className="text" data-aos='fade-up'>
        <h2>{props.title}</h2>

        <p>{props.desc}</p>

        <button className="btn">
          <a style={{color: 'white'}} href={props.link} target='_blank' rel='noreferrer'>Explore More</a>
        </button>
      </div>

      
    </div>
  )
}

export default Displaytwo
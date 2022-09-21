import React,{useEffect} from 'react'
import './displayseven.scss'
import AOS from 'aos'
import 'aos/dist/aos.css'

function Displayseven(props) {

  useEffect(() => {
    AOS.init({duration:2000})
  })

  return (
    <div className='displayseven'>
      <div className="text" data-aos='fade-up'>
        <h2>{props.title}</h2>

        <p>{props.desc}</p>

        <button className="btn">
          <a href={props.link} target='_blank' rel='noreferrer'>Explore More</a>
        </button>
      </div>
    </div>
  )
}

export default Displayseven
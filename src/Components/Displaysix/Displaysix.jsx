import React,{useEffect} from 'react'
import './displaytwo.scss'
import AOS from 'aos'
import 'aos/dist/aos.css'

function Displaysix(props) {
  useEffect(() => {
    AOS.init({duration:2000})
  })

  return (
    <div className='displaysix'>

      <div className="video" data-aos='fade-up'>
        <iframe
        src={`https://www.youtube.com/embed/${props.id}`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
         title="Embedded youtube"
        />
      </div>
    </div>
  )
}

export default Displaysix
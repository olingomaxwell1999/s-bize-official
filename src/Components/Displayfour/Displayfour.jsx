import React from 'react'
import Video from '../Video/Video'
import './display.scss'

function Displayfour(props) {
  return (
    <div className='displayone'>
      <div className="video">
        <Video embedId='F8Z9-6VL7k4'/>
      </div>
      <div className="text">
        <h2>{props.title}</h2>

        <p>{props.desc}</p>

        <button className="btn">
          <a href={props.link} target='_blank' rel='noreferrer'>Explore More</a>
        </button>
      </div>
    </div>
  )
}

export default Displayfour
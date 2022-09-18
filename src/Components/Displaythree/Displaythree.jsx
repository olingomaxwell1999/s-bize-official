import React from 'react'
import Video from '../Video/Video'
import './display.scss'

function Displaythree(props) {
  return (
    <div className='displayone'>
      <div className="video">
        <Video embedId='H3GU7vFNuUI'/>
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

export default Displaythree
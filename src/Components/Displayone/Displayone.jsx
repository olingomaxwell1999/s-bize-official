import React from 'react'
import Video from '../Video/Video'
import './display.scss'

function Displayone(props) {
  return (
    <div className='display'>
      
      <div className="text">
        <h2>{props.title}</h2>

        <p>{props.desc}</p>

        <button className="btn">
          <a style={{color: 'white'}} href={props.link} target='_blank' rel='noreferrer'>Explore More</a>
        </button>
      </div>

      <div className="video">
        <Video embedId='gTEXJsw62iU'/>
      </div>
    </div>
  )
}

export default Displayone
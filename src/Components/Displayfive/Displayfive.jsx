import React from 'react'
import Video from '../Video/Video'
import './display.scss'

function Displayfive(props) {
  return (
    <div className='displayone'>
      <div className="video">
        <Video embedId='CNiJUGnDo04'/>
      </div>
      <div className="text">
        <h2>{props.title}</h2>

        <p>{props.desc}</p>
      </div>
    </div>
  )
}

export default Displayfive
import React from 'react'
import Video from '../Video/Video'
import './display.scss'

function Displaynine(props) {
  return (
    <div className='displayeight'>
      <div className="video">
        <Video embedId='MxmpnQFHhZk'/>
      </div>
      <div className="text">
        <h2>{props.title}</h2>

        <p>{props.desc}</p>
      </div>
    </div>
  )
}

export default Displaynine
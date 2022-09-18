import React from 'react'
import Video from '../Video/Video'
import './display.scss'

function Displayeight(props) {
  return (
    <div className='displayeight'>
      <div className="video">
        <Video embedId='ANdkYtgDaJw'/>
      </div>
      <div className="text">
        <h2>{props.title}</h2>

        <p>{props.desc}</p>
      </div>
    </div>
  )
}

export default Displayeight
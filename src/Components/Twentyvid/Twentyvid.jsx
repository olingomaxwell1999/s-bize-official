import React from 'react'
import './twentyvid.scss'
import Video from '../Video/Video'

function Twentyvid(props) {
  return (
    <div className='twentyvid'>
        <div className="title">
          <h1>{props.title}</h1>
        </div>

        <div className="main">

          <div className="video">
            <Video embedId='q3wX4e1hnTc' />
          </div>

          <div className="text">
            <p>{props.text}</p>
          </div>
        </div>
    </div>
  )
}

export default Twentyvid
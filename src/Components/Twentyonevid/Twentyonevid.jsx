import React from 'react'
import './twentyvid.scss'
import Video from '../Video/Video'

function Twentyvid(props) {
  return (
    <div className='display'>
        <div className="title">
          <h1>{props.title}</h1>
        </div>

        <div className="main">

          <div className="video">
            <Video embedId='bYeGX2iGo7Y' />
          </div>

          <div className="text">
            <p>{props.text}</p>
          </div>
        </div>
    </div>
  )
}

export default Twentyvid
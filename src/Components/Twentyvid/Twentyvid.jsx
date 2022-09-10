import React from 'react'
import './twentyvid.scss'
import video from '../../assets/nairobi.mp4';

function Twentyvid() {
  return (
    <div className='twentyvid'>
        <div className="video">
            <video src={video} controls></video>
        </div>
        <div className="text">
            <p>
            The S-bize program is an innovative program that connects academic excellence on social entrepreneurship to social entrepreneurs in Kenya. The program offers MBA students with business knowledge to field experience through a consulting mission in the slums of Kenya.
            </p>
        </div>
    </div>
  )
}

export default Twentyvid
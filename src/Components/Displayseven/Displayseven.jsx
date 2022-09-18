import React from 'react'
import './displayseven.scss'

function Displayseven(props) {
  return (
    <div className='displayseven'>
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

export default Displayseven
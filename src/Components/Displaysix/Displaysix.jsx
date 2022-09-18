import React from 'react'
import './displaytwo.scss'

function Displaysix(props) {
  return (
    <div className='displayone'>
      <div className="text">
        <h2>{props.title}</h2>

        <p>{props.desc}</p>
      </div>

      <div className="video">
        <img src={props.img} alt="" />
      </div>
    </div>
  )
}

export default Displaysix
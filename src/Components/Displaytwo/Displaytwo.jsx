import React from 'react'
import './displaytwo.scss'

function Displaytwo(props) {
  return (
    <div className='displayo'>

      <div className="video">
        <img src={props.img} alt="" />
      </div>

      <div className="text">
        <h2>{props.title}</h2>

        <p>{props.desc}</p>

        <button className="btn">
          <a style={{color: 'white'}} href={props.link} target='_blank' rel='noreferrer'>Explore More</a>
        </button>
      </div>

      
    </div>
  )
}

export default Displaytwo
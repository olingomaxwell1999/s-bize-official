import React from 'react'
import './card.scss'
import { Link } from 'react-router-dom'

function Card(props) {
  return (
    <div className="wrapper">
        <div className="wrapper__body">
          <img src={props.img} alt="wrapper img" />
          <h2>{props.title}</h2>

          <p>{props.desc}</p>

          <button className="btn">
            <Link style={{color: 'white'}} to={props.link}>Read More</Link>
          </button>
        </div>
    </div>
  )
}

export default Card
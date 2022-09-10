import React from 'react'
import './card.scss'
import img from '../../assets/banner1.JPG'
import Button from '../Navbar/Button'

function Card() {
  return (
    <div className="card">
        <div className="img">
            <img src={img} alt="img" />
        </div>
        <div className="text">
            <h3>Wealth of Knowledge</h3>

            <p>The consultants bring knowledge after recieving training from a global leader in business education; The london School of Economics.The london School of Economics.</p>

            <Button>Read More</Button>
        </div>
    </div>
  )
}

export default Card
import React from 'react'
import jy from '../../assets/banner2.JPG'

function Cardmeet() {
  return (
    <div class="car">
        <div className="img-top">
            <img height='200px' width='100%' src={jy} alt="top" />
        </div>
        <div className="text">
            <p>We are excited to host you this year! In the coming months you will be immersed in the social enterprise landscape in the slums of Nairobi and the realities of a social entrepreneur maneuvering to change the world in Kenya</p>
        </div>
    </div>
  )
}

export default Cardmeet
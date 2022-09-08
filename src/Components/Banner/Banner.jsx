import React from 'react'
import './banner.scss'
import {Link} from 'react-router-dom'
import Button from '@mui/material/Button';
// import banner from '../../assets/banner1.JPG'

function Banner() {
  return (
    <div className='banner'>
        {/* <div className="overlay"></div> */}
        {/* <img src="" alt="" /> */}
        <div className="text">
            <h1>Social Business Model</h1>
            <h1 className='dev'>Development</h1>

            <p>THe S-Bize program is an innovative program that connects academic excellence on social entrepreneurship to social entrepreneurs in Kenya. The program offers MBA students with business knowledge to field experience through a consulting mission...</p>

            <div className="dots">
                <span></span>
                <span></span>
                <span></span>
            </div>
            
            <Button className='btn' variant="contained">
                <Link to=''>Apply Now</Link>
            </Button>
        </div>

        
    </div>
  )
}

export default Banner
import React from 'react'
import photo from '../../assets/nobg.png'

import './about.scss'

function About() {
  return (
    <div className='about'>
        <div className="image">
          <div className="rhombus"></div>

          <div className="circle">
            <img src={photo} alt="About" />
          </div>
          
        </div>

        <div className="text">
            <h2>About Us</h2>

            <p>The S-bize program is an innovative program that connects academic excellence on social entrepreneurship to social entrepreneurs in Kenya. The program offers MBA students with business knowledge to field experience through a consulting mission in the slums of Kenya.<br/><br/>The S-bize program is an innovative program that connects academic excellence on social entrepreneurship to social entrepreneurs in Kenya. The program offers MBA students with business knowledge to field experience through a consulting mission in the slums of Kenya.<br/><br/>
            The S-bize program is an innovative program that connects academic excellence on social entrepreneurship to social entrepreneurs in Kenya. The program offers MBA students with business knowledge to field experience through a consulting mission in the slums of Kenya.</p>
        </div>
    </div>
  )
}

export default About
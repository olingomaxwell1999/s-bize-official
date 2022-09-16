import React from 'react'
import photo from '../../assets/nobg.png'

import './about.scss'

function About() {
  return (
    <section className="section">
      <div className="container">
        <div className="columns">
          <div className="column">
            <div className="rhombus"></div>
            <div className="circle">
              <img src={photo} alt="s-bize" />
            </div>
          </div>
          <div className="column lex">
            <h1 className="title">About S-Bize</h1>
            <p>The S-Bize program is an innovative program that connects academic excellence on social entrepreneurship to social entrepreneurs in Kenya. The program offers students in the London School of Economics Masters in Social Entrepreneurship & Innovation program with field experience business knowledge through a consulting mission in the slums of Kenya.<br/><br/>

            Students gain hands-on experience and learn about the business challenges and opportunities at the base of the economic pyramid and organizations get business acumen for their ventures.<br/><br/>

            This experience entails travel to Kenya (whether virtual or physical),, guided tours in the communities and implementation of research methodologies responding to social issues of choice. The students would then analyze the challenges and develop solutions that would work in the specific settings. 
          </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
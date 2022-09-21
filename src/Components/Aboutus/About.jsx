import React,{useEffect} from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

import './about.scss'

function About() {

  useEffect(() => {
    AOS.init({duration:2000})
  })
  return (
    <section className="about">
      <div className="img" data-aos='fade-up'>
        <div className="rhombus"></div>
        
        <div className="circle">
          
        </div>
      </div>

      <div className="text" data-aos='fade-up'>
        <h1 className="title">About S-Bize</h1>
          <p>The S-Bize program is an innovative program that connects academic excellence on social entrepreneurship to social entrepreneurs in Kenya. The program offers students in the London School of Economics Masters in Social Entrepreneurship & Innovation program with field experience business knowledge through a consulting mission in the slums of Kenya.<br/><br/>Students gain hands-on experience and learn about the business challenges and opportunities at the base of the economic pyramid and organizations get business acumen for their ventures.<br/><br/>This experience entails travel to Kenya (whether virtual or physical), guided tours in the communities and implementation of research methodologies responding to social issues of choice. The students would then analyze the challenges and develop solutions that would work in the specific settings. 
          </p>
      </div>

      </section>
  )
}

export default About
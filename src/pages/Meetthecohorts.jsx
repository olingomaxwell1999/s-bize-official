import React,{useEffect} from 'react'
import Bannertwo from '../Components/Bannertwo/Bannertwo'
import Card from '../Components/Card/Card'
import Twenty from '../assets/twenty.jpg'
import Twentyone from '../assets/twentyone.jpg'
import Twentytwo from '../assets/twentytwo.jpg'
import back from '../assets/banner1.JPG'
import AOS from 'aos'
import 'aos/dist/aos.css'

function Meetthecohorts() {
  useEffect(() => {
    AOS.init({duration:2000})
  })
  return (
    <div>
      <Bannertwo bg={back} title="Meet The Cohorts"/>

      <div className="carrier" data-aos='fade-up'>
        <div className="text">
          <p >Since 2018, Nairobits has been hosting students from the london School of economics in Kenya to undertake their research as part of their masters program. This research involves structuring social business models for organizations. Here are some of the cohorts we have successfully had so far.</p>
        </div>

        <div className="meet" data-aos='fade-up'>
            <Card img={Twenty} title="2020 Cohort" link="/twenty"  />
            <Card img={Twentyone} title="2021 Cohort" link="/twentyone" />
            <Card img={Twentytwo} title="2022 Cohort" link="/twentytwo" />
        </div>
      </div>
    </div>
  )
}

export default Meetthecohorts
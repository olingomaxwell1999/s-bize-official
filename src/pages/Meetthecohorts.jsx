import React from 'react'
import Bannertwo from '../Components/Bannertwo/Bannertwo'
import Card from '../Components/Card/Card'
import Twenty from '../assets/twenty.jpg'
import Twentyone from '../assets/twentyone.jpg'
import Twentytwo from '../assets/twentytwo.jpg'
import back from '../assets/banner1.JPG'

function Meetthecohorts() {
  return (
    <div>
      <Bannertwo bg={back} title="Meet The Cohorts"/>

      <div className="cohorts">
        <div className="text">
          <h1>Meet our Cohorts</h1>
          <p>Since 2018, Nairobits has been hosting students from the london School of economics in Kenya to undertake their research as part of their masters program. This research involves structuring social business models for organizations. Here are some of the cohorts we have successfully had so far.</p>
        </div>

        <div className="meet">
            <Card img={Twenty} title="2020 Cohort" desc="We have identified organizations that are interested in scaling up the impact they have on the lives of the people living in low-income areas..." link="/twenty"  />
            <Card img={Twentyone} title="2021 Cohort" desc="We are excited to host you this year! In the coming months you will be immersed in the social enterprise landscape in the slums of..." link="/twentyone" />
            <Card img={Twentytwo} title="2022 Cohort" desc="We are excited to host you this year! In the coming months you will be immersed in the social enterprise landscape in the slums of..." link="/twentytwo" />
        </div>
      </div>
    </div>
  )
}

export default Meetthecohorts